import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { EddyService } from '../eddy.service';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-eddy-views-step-three',
  templateUrl: './eddy-views-step-three.page.html',
  styleUrls: ['./eddy-views-step-three.page.scss'],
})
export class EddyViewsStepThreePage implements OnInit {

  public heading = this._eddyService.getInspectionHeading();
  public step = 3;
  public stepCount = this._eddyService.stepCount;
  public stepDescription = 'Calibration Details & Test Piece';
  public form: FormGroup;
  public validForm = false;
  public navigateNext = false;

  // image array to patch onto form.
  public photos: string[] = [];

  constructor(
    private _eddyService: EddyService,
    private _toastService: ToastService
  ) { }

  ngOnInit() {
    this.createForm();
    this.subscribeToForm();
    this.patchForm();
  }

  public imagePicked(event: {image: string; category: string}): void {
    const croppedImage = event.image;

    if (croppedImage) {
      this.photos.unshift(croppedImage);
      this.form.patchValue({images: this.photos});
    }
  }

  public deleteImage(index: number): void {
    this.photos.splice(index, 1);
    this.form.patchValue({images: this.photos});
  }

  public async usePreviousData(): Promise<void> {
    const similarInspection = await this._eddyService.searchPreviousData('Eddy Current');

    if (!similarInspection) {
      this._toastService.presentToast('No Previous data.', 'warning');
    }
    this.form.patchValue({...similarInspection});
  }
  //

  public navigateToNext(event): void {
    this.navigateNext = event;
  }



  private createForm() {
    this.form = new FormGroup({
      PROBE_FREQUENCY: new FormControl(null, {
        validators: [Validators.required]
      }),
      PHASE_ANGLE: new FormControl(null, {
        validators: [Validators.required]
      }),
      GAIN_SETTING: new FormControl(null, {
        validators: [Validators.required]
      }),
      SENSITIVITY_SETTING: new FormControl(null, {
        validators: [Validators.required]
      }),
      CAL_SHIM_USED: new FormControl(null, {
        validators: [Validators.required]
      }),
      images: new FormControl(null, {
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
      { ...this._eddyService.returnTemplateDataObject() }
    );
    // Also patch image type form controls.
    this.photos = this.form.controls['images'].value || [];
  }

  private sendFormDataToService(formData: FormData): void {
    this._eddyService.updateTemplateDataObject(formData);
  }

}
