import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { VisualDynamicPinsService } from '../visual-dynamic-pins.service';

@Component({
  selector: 'app-visual-dynamic-pins-views-step-one',
  templateUrl: './visual-dynamic-pins-views-step-one.page.html',
  styleUrls: ['./visual-dynamic-pins-views-step-one.page.scss'],
})
export class VisualDynamicPinsViewsStepOnePage implements OnInit {

  public heading = this._visualDynamicPinsService.getInspectionHeading();
  public form: FormGroup;
  public validForm = false;
  public navigateNext = false;

  // image array to patch onto form.
  public photos: string[] = [];

  constructor(
    private _visualDynamicPinsService: VisualDynamicPinsService
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
      this.form.patchValue({images180: this.photos});
    }
  }

  public deleteImage(index: number): void {
    this.photos.splice(index, 1);
    this.form.patchValue({images180: this.photos});
  }

  public navigateToNext(event): void {
    this.navigateNext = event;
  }



  private createForm() {
    this.form = new FormGroup({
      images180: new FormControl(null, {
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
      { ...this._visualDynamicPinsService.returnTemplateDataObject() }
    );
    // Also patch image type form controls.
    this.photos = this.form.controls['images180'].value || [];
  }

  private sendFormDataToService(formData: FormData): void {
    this._visualDynamicPinsService.updateTemplateDataObject(formData);
  }

}
