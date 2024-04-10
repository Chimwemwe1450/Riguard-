import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { VisualPinAuxService } from '../visual-pin-aux-line.service';

@Component({
  selector: 'app-visual-pin-aux-line-views-step-two',
  templateUrl: './visual-pin-aux-line-views-step-two.page.html',
  styleUrls: ['./visual-pin-aux-line-views-step-two.page.scss'],
})
export class VisualPinAuxViewsStepTwoPage implements OnInit {

  public heading = this._visualPinService.getInspectionHeading();
  public step = 2;
  public stepCount = this._visualPinService.stepCount;
  public stepDescription = '180° to 360°';
  public form: FormGroup;
  public validForm = false;
  public navigateNext = false;

  // image array to patch onto form.
  public photos: string[] = [];

  constructor(
    private _visualPinService: VisualPinAuxService
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
      this.form.patchValue({images360: this.photos});
    }
  }

  public deleteImage(index: number): void {
    this.photos.splice(index, 1);
    this.form.patchValue({images360: this.photos});
  }

  public navigateToNext(event): void {
    this.navigateNext = event;
  }



  private createForm() {
    this.form = new FormGroup({
      images360: new FormControl(null, {
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
      { ...this._visualPinService.returnTemplateDataObject() }
    );
    // Also patch image type form controls.
    this.photos = this.form.controls['images360'].value || [];
  }

  private sendFormDataToService(formData: FormData): void {
    this._visualPinService.updateTemplateDataObject(formData);
  }

}
