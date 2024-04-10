import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { BwmService } from '../bwm.service';
import { PhotoService } from 'src/app/shared/services/photo.service';
import { ModalController } from '@ionic/angular';
import { CropperComponent } from 'src/app/shared/components/cropper/cropper.component';

@Component({
  selector: 'app-bwm-views-step-six',
  templateUrl: './bwm-views-step-six.page.html',
  styleUrls: ['./bwm-views-step-six.page.scss'],
})
export class BwmViewsStepSixPage implements OnInit {

  public heading = this._bwmService.getInspectionHeading();
  public step = 6;
  public stepCount = this._bwmService.stepCount;
  public stepDescription = 'Hyd 1 Pin Connectors';
  public form: FormGroup;
  public validForm = false;
  public navigateNext = false;

  // image array to patch onto form.
  public photos180: string[] = [];
  public photos360: string[] = [];
  // base64 value from camera api.
  public newImage: string;
  // new base64 from cropper comp.
  private croppedImage: string;

  constructor(
    private _bwmService: BwmService,
    public _photoService: PhotoService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.createForm();
    this.subscribeToForm();
    this.patchForm();
  }

  public async fromGallery(photoSet: string): Promise<void> {
    this.newImage = await this._photoService.fromGallery();
    this.cropperModal(this.newImage, photoSet);
  }

  public deleteImage(index: number, photos: Array<string>, set: string): void {
    photos.splice(index, 1);

    if (set === '180') {
      this.form.patchValue({hyd1Images180: photos});
    }
    if (set === '360') {
      this.form.patchValue({hyd1Images360: photos});
    }
  }

  private async cropperModal(image: string, photoSet: string) {
    const modal = await this.modalController.create({
      component: CropperComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        image
      }
    });
    modal.onDidDismiss().then(data => {
      this.croppedImage = data.data;

      if (this.croppedImage) {
        if (photoSet === '180') {
          this.photos180.unshift(this.croppedImage);
          this.form.patchValue({hyd1Images180: this.photos180});
        }
        if (photoSet === '360') {
          this.photos360.unshift(this.croppedImage);
          this.form.patchValue({hyd1Images360: this.photos360});
        }
      }

    });
    return await modal.present();
  }

  public navigateToNext(event): void {
    this.navigateNext = event;
  }

  private createForm() {
    this.form = new FormGroup({
      HYD_1_PIN_CONNECTOR_VISUAL_1_FORM_2_VISUAL: new FormControl(null, {
        validators: [Validators.required]
      }),
      HYD_1_PIN_CONNECTOR_VISUAL_1_FORM_2_MECH_DAMAGE: new FormControl(null, {
        validators: [Validators.required]
      }),
      HYD_1_PIN_CONNECTOR_VISUAL_1_FORM_2_STATUS: new FormControl(null, {
        validators: [Validators.required]
      }),
      HYD_1_PIN_CONNECTOR_VISUAL_1_FORM_2_PITTING: new FormControl(null, {
        validators: [Validators.required]
      }),
      HYD_1_PIN_CONNECTOR_VISUAL_1_FORM_2_COMMENT: new FormControl(null, {
        validators: [Validators.required]
      }),
      HYD_1_PIN_CONNECTOR_VISUAL_1_FORM_2_NOTES: new FormControl(''),
      HYD_1_PIN_CONNECTOR_VISUAL_1_FORM_2_NAME: new FormControl('Hyd 1 Box Connector', {
        validators: [Validators.required]
      }),
      HYD_1_PIN_CONNECTOR_VISUAL_1_FORM_2_QUANTITY: new FormControl('1', {
        validators: [Validators.required]
      }),
      hyd1Images180: new FormControl(null, {
        validators: [Validators.required]
      }),
      hyd1Images360: new FormControl(null, {
        validators: [Validators.required]
      })
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

  private patchForm() {
    this.form.patchValue(
      { ...this._bwmService.returnTemplateDataObject() }
    );
    // Also patch image type form controls.
    this.photos180 = this.form.controls['hyd1Images180'].value || [];
    this.photos360 = this.form.controls['hyd1Images360'].value || [];
  }

  private sendFormDataToService(formData: FormData): void {
    this._bwmService.updateTemplateDataObject(formData);
  }

}
