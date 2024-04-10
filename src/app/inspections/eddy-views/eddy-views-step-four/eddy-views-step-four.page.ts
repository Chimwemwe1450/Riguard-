import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { ModalController } from '@ionic/angular';

import { CropperComponent } from 'src/app/shared/components/cropper/cropper.component';

import { EddyService } from '../eddy.service';
import { PhotoService } from 'src/app/shared/services/photo.service';
import { ToastService } from 'src/app/shared/services/toast.service';
import { Eddy } from '../eddy.model';
import { Indication } from 'src/app/shared/models/indication.model';

@Component({
  selector: 'app-eddy-views-step-four',
  templateUrl: './eddy-views-step-four.page.html',
  styleUrls: ['./eddy-views-step-four.page.scss'],
})
export class EddyViewsStepFourPage implements OnInit {

  public heading = this._eddyService.getInspectionHeading();
  public step = 4;
  public stepCount = this._eddyService.stepCount;
  public stepDescription = 'Inspection Result';
  public form: FormGroup;
  public validForm = false;
  public navigateNext = false;

  public indications: FormArray;
  public indicationForm: FormGroup;
  private newImage: string;
  private croppedImage: string;

  constructor(
    private _eddyService: EddyService,
    private fb: FormBuilder,
    private modalController: ModalController,
    private _photoService: PhotoService,
    private _toastService: ToastService
  ) { }

  ngOnInit() {
    this.createForm();
    this.createIndicationForm();
    this.subscribeToForm();
    this.patchForm();
  }

  public addIndication(): void {
    const row = this.buildFormGroup();

    this.indications.insert(0, row);
    this.form.setControl('indications', this.indications);
  }

  public removeIndication(index: number): void {
    this.indications.removeAt(index);
  }

  public async addImage(index: number): Promise<void> {
    this.newImage = await this._photoService.fromGallery();
    this.cropperModal(this.newImage, index);
  }

  public navigateToNext(event): void {
    this.navigateNext = event;
  }



  private createIndicationForm(): void {
    this.indications = this.fb.array([]);
    this.indicationForm = this.fb.group({ indication: this.indications });

    // this.form.addControl('indications', this.indications);
  }

  private createForm(): void {
    this.form = new FormGroup({
      COMPONENT_TRACEABILITY: new FormControl(null, {
        validators: [Validators.required]
      }),
      INSPECTION_STATUS: new FormControl(null, {
        validators: [Validators.required]
      }),
      indicationDataList: new FormControl(null),
      complete: new FormControl(false)
    });
  }

  private subscribeToForm(): void {
    this.form.valueChanges.subscribe(() => {
      this.sendFormDataToService(this.form.value);

      if (this.form.valid) {
        this.validForm = true;
      } else {
        this.validForm = false;
      };
    });
  }

  private patchForm(): void {
    const formData: Eddy = this._eddyService.returnTemplateDataObject();

    if ('indicationDataList' in formData) {
      const restoredIndications = formData.indicationDataList;

      this.form.patchValue(
        { ...formData }
      );
      this.form.setControl('indicationDataList', this.indications);

      if (restoredIndications !== null) {
        restoredIndications.forEach((item) => {
          const row = this.buildFormGroup(item);
          this.indications.push(row);
        });
      }

    } else {

      this.form.patchValue(
        { ...formData }
      );
    }
  }

  private sendFormDataToService(formData: FormData): void {
    this._eddyService.updateTemplateDataObject(formData);
  }

  private savePhoto(index: number): void {
    if (this.croppedImage !== undefined) {
        // const fileName = new Date().getTime() + '.jpeg';

        const control = this.indications.at(index);
        control.patchValue({indicationImage: this.croppedImage});

        this._toastService.presentToast('Successfully Added', 'primary');
    } else {
      this._toastService.presentToast('Add at least 1 photo', 'warning');
    }
  }

  private async cropperModal(image: string, index: number) {
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
        this.savePhoto(index);
      } else {
        this.croppedImage = undefined;
      }

    });
    return await modal.present();
  }

  private buildFormGroup(indicationSet?: Indication): FormGroup {
    if (!indicationSet) {
      return this.fb.group({
        distanceFromDatum: [null, []],
        length: [null, []],
        dbRef: [null, []],
        indicationImage: [null, []],
      });
    }

    return this.fb.group({
      distanceFromDatum: [indicationSet.distanceFromDatum, []],
      length: [indicationSet.length, []],
      dbRef: [indicationSet.dbRef, []],
      indicationImage: [indicationSet.indicationImage, []],
    });
  }

}
