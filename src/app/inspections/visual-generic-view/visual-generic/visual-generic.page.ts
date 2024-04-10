import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ModalController } from '@ionic/angular';

import { VisualGenericService } from '../visual-generic.service';
import { ToastService } from 'src/app/shared/services/toast.service';
import { PhotoService } from 'src/app/shared/services/photo.service';
import { AlertService } from 'src/app/shared/services/alert.service';

import { CropperComponent } from 'src/app/shared/components/cropper/cropper.component';

import { Images } from '../images.model';
import { VisualGeneric } from '../visual-generic.model';

@Component({
  selector: 'app-visual-generic',
  templateUrl: './visual-generic.page.html',
  styleUrls: ['./visual-generic.page.scss'],
})
export class VisualGenericPage implements OnInit {

  public heading = this._visualGenericService.getInspectionHeading();
  public form: FormGroup;
  public validForm = false;
  public navigateNext = false;

  public photoTaken = false;
  public dataList: Array<Images> = [];

  public photoField: string;
  public notesField: string;

  private editingIndex: number;

  // image array to patch onto form.
  public photos: string[] = [];
  // base64 value from camera api.
  public newImage: string;
  // new base64 from cropper comp.
  public croppedImage: string;

  constructor(
    private _visualGenericService: VisualGenericService,
    private _toastService: ToastService,
    public _photoService: PhotoService,
    private modalController: ModalController,
    private _alertService: AlertService
  ) { }

  ngOnInit() {
    this.createForm();
    this.subscribeToForm();
    this.patchValues();
  }

  public navigateToNext(event): void {
    this.navigateNext = event;
  }

  private createForm(): void {
    this.form = new FormGroup({
      VIS_FORM_1_COMPONENT_TRACEBILITY: new FormControl(null, {
        validators: [Validators.required]
      }),
      VIS_FORM_1_STATUS: new FormControl(null, {
        validators: [Validators.required]
      }),
      complete: new FormControl(false)
    });
  }

  private subscribeToForm(): void {
    this.form.valueChanges.subscribe(() => {
      this.sendFormDataToService();
      this.updateFormState();
    });
  }

  private patchValues(): void {
    const retrievedData = this._visualGenericService.returnTemplateDataObject();

    this.dataList = retrievedData.genVisImages || [];
    this.form.patchValue({...retrievedData});
  }

  private sendFormDataToService(): void {
    const combinedData: VisualGeneric = {
      VIS_FORM_1_COMPONENT_TRACEBILITY: this.form.get('VIS_FORM_1_COMPONENT_TRACEBILITY').value,
      VIS_FORM_1_STATUS: this.form.get('VIS_FORM_1_STATUS').value,
      genVisImages: this.dataList,
      complete: this.form.get('complete').value
    };
    this._visualGenericService.updateTemplateDataObject(combinedData);
  }


  public async takePhoto(): Promise<void> {
    if (this.dataList.length === 4) {
      this._toastService.presentToast('Only 4 photo uploads allowed', 'warning');

      return;
    }

    // logic for camera api here.
    this.newImage = await this._photoService.fromGallery();
    this.cropperModal(this.newImage);
  }

  public savePhoto(): void {
    if (this.croppedImage !== undefined) {
      const index: number = this.dataList.findIndex(item => item.fileName === this.photoField);

      if (index < 0) {
        const fileName = new Date().getTime() + '.jpeg';

        this.dataList.push({
          fileName,
          image: this.croppedImage,
          note: `${this.notesField ? this.notesField : ''}`
        });
        this.clearInputs();
        this.updateFormState();

        this._toastService.presentToast('Successfully Added', 'primary');
      } else {
        this.dataList.splice(this.editingIndex, 1, {
          fileName: this.dataList[this.editingIndex].fileName,
          image: this.croppedImage,
          note: `${this.notesField ? this.notesField : ''}`
        });
        this.clearInputs();
        this.updateFormState();

        this._toastService.presentToast('Successfully Edited', 'primary');
      }
      this.sendFormDataToService();
    } else {
      this._toastService.presentToast('Add at least 1 photo', 'warning');
    }

  }

  public editPhoto(index: number): void {
    this.editingIndex = index;

    const photoItem: Images = this.dataList[index];
    this.photoField = photoItem.fileName;
    this.croppedImage = photoItem.image;
    this.notesField = photoItem.note;
  }

  public deletePhoto(index: number): void {
    this._alertService.presentAlert(
      'Delete Image',
      'Are you sure you want to remove this image?',
      'Yes',
      'Cancel',
      async () => {
        this.dataList.splice(index, 1);
        this.sendFormDataToService();
        this._toastService.presentToast('Image removed', 'primary');
      },
      async () => {
        console.log('Cancel deletion');
      }
    );
  }

  public clearBlock(): void {
    this.clearInputs();
  }


  private async cropperModal(image: string) {
    const modal = await this.modalController.create({
      component: CropperComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        image
      }
    });
    modal.onDidDismiss().then(data => {

      if (data.data) {
        this.croppedImage = data.data;
      } else {
        this.croppedImage = undefined;
      }

    });
    return await modal.present();
  }

  private clearInputs(): void {
    this.photoField = undefined;
    this.notesField = undefined;
    this.croppedImage = undefined;
  }

  private updateFormState(): void {
    if (this.form.valid) {
      if (this.dataList.length > 0) {
        this.validForm = true;
      }
    } else {
      this.validForm = false;
    };
  }

}
