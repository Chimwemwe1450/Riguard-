import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { DyePenService } from '../dye-pen.service';

@Component({
  selector: 'app-dye-pen-views-step-five',
  templateUrl: './dye-pen-views-step-five.page.html',
  styleUrls: ['./dye-pen-views-step-five.page.scss'],
})
export class DyePenViewsStepFivePage implements OnInit {

  public heading = this._dyePenService.getInspectionHeading();
  public step = 5;
  public stepCount = this._dyePenService.stepCount;
  public stepDescription = 'Photos';
  public form: FormGroup;
  public validForm = false;
  public navigateNext = false;

  // image array to patch onto form.
  public photos: string[] = [];

  constructor(
    private _dyePenService: DyePenService
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

  public navigateToNext(event): void {
    this.navigateNext = event;
  }


  private createForm() {
    this.form = new FormGroup({
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
      { ...this._dyePenService.returnTemplateDataObject() }
    );
    // Also patch image type form controls.
    this.photos = this.form.controls['images'].value || [];
  }

  private sendFormDataToService(formData: FormData): void {
    this._dyePenService.updateTemplateDataObject(formData);
  }

}
