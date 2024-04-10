import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { BwmService } from '../bwm.service';

@Component({
  selector: 'app-bwm-views-step-seven',
  templateUrl: './bwm-views-step-seven.page.html',
  styleUrls: ['./bwm-views-step-seven.page.scss'],
})
export class BwmViewsStepSevenPage implements OnInit {

  public heading = this._bwmService.getInspectionHeading();
  public step = 7;
  public stepCount = this._bwmService.stepCount;
  public stepDescription = 'Hyd 2 Pin Connectors';
  public form: FormGroup;
  public validForm = false;
  public navigateNext = false;

  // image array to patch onto form.
  public photos180: string[] = [];
  public photos360: string[] = [];

  constructor(
    private _bwmService: BwmService
  ) { }

  ngOnInit() {
    this.createForm();
    this.subscribeToForm();
    this.patchForm();
  }

  public imagePicked(event: {image: string; category: string}): void {
    const croppedImage = event.image;

    if (croppedImage) {
      if (event.category === '180') {
        this.photos180.unshift(croppedImage);
        this.form.patchValue({hyd2Images180: this.photos180});
      }
      if (event.category === '360') {
        this.photos360.unshift(croppedImage);
        this.form.patchValue({hyd2Images360: this.photos360});
      }
    }
  }

  public deleteImage(index: number, photos: Array<string>, set: string): void {
    photos.splice(index, 1);
    if (set === '180') {
      this.form.patchValue({hyd2Images180: photos});
    }
    if (set === '360') {
      this.form.patchValue({hyd2Images360: photos});
    }
  }

  public navigateToNext(event): void {
    this.navigateNext = event;
  }



  private createForm() {
    this.form = new FormGroup({
      HYD_2_PIN_CONNECTOR_VISUAL_1_FORM_2_VISUAL: new FormControl(null, {
        validators: [Validators.required]
      }),
      HYD_2_PIN_CONNECTOR_VISUAL_1_FORM_2_MECH_DAMAGE: new FormControl(null, {
        validators: [Validators.required]
      }),
      HYD_2_PIN_CONNECTOR_VISUAL_1_FORM_2_STATUS: new FormControl(null, {
        validators: [Validators.required]
      }),
      HYD_2_PIN_CONNECTOR_VISUAL_1_FORM_2_PITTING: new FormControl(null, {
        validators: [Validators.required]
      }),
      HYD_2_PIN_CONNECTOR_VISUAL_1_FORM_2_COMMENT: new FormControl(null, {
        validators: [Validators.required]
      }),
      HYD_2_PIN_CONNECTOR_VISUAL_1_FORM_2_NOTES: new FormControl(''),
      HYD_2_PIN_CONNECTOR_VISUAL_1_FORM_2_NAME: new FormControl('Hyd 2 Box Connector', {
        validators: [Validators.required]
      }),
      HYD_2_PIN_CONNECTOR_VISUAL_1_FORM_2_QUANTITY: new FormControl('1', {
        validators: [Validators.required]
      }),
      hyd2Images180: new FormControl(null, {
        validators: [Validators.required]
      }),
      hyd2Images360: new FormControl(null, {
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
    this.photos180 = this.form.controls['hyd2Images180'].value || [];
    this.photos360 = this.form.controls['hyd2Images360'].value || [];
  }

  private sendFormDataToService(formData: FormData): void {
    this._bwmService.updateTemplateDataObject(formData);
  }

}
