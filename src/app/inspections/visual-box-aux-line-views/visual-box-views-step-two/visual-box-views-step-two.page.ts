import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { VisualBoxAuxService } from '../visual-box.service';

@Component({
  selector: 'app-visual-box-views-step-two',
  templateUrl: './visual-box-views-step-two.page.html',
  styleUrls: ['./visual-box-views-step-two.page.scss'],
})
export class VisualBoxAuxViewsStepTwoPage implements OnInit {

  public heading = this._visualBoxService.getInspectionHeading();
  public step = 2;
  public stepCount = this._visualBoxService.stepCount;
  public stepDescription = '180° to 360';
  public form: FormGroup;
  public validForm = false;
  public navigateNext = false;

  // image array to patch onto form.
  public photos: string[] = [];

  constructor(
    private _visualBoxService: VisualBoxAuxService
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
      { ...this._visualBoxService.returnTemplateDataObject() }
    );
    // Also patch image type form controls.
    this.photos = this.form.controls['images360'].value || [];
  }

  private sendFormDataToService(formData: FormData): void {
    this._visualBoxService.updateTemplateDataObject(formData);
  }

}
