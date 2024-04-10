import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { VisualStaticPinsService } from '../visual-static-pins.service';

@Component({
  selector: 'app-visual-static-pins-views-step-one',
  templateUrl: './visual-static-pins-views-step-one.page.html',
  styleUrls: ['./visual-static-pins-views-step-one.page.scss'],
})
export class VisualStaticPinsViewsStepOnePage implements OnInit {

  public heading = this._visualStaticPinsService.getInspectionHeading();
  public form: FormGroup;
  public validForm = false;
  public navigateNext = false;

  // image array to patch onto form.
  public photos: string[] = [];

  constructor(
    private _visualStaticPinsService: VisualStaticPinsService
  ) { }

  ngOnInit() {
    this.createForm();
    this.subscribeToForm();
    this.patchForm();
  }

  /* public takePhoto(): void {
    this._photoService.fromCamera();
  } */

  public imagePicked(event: {image: string; category: string}): void {
    const croppedImage = event.image;

    if (croppedImage) {
      this.photos.unshift(croppedImage);
      this.form.patchValue({images180: this.photos});
    }
  }

  /* public imageCropped(event: ImageCroppedEvent): void {
    console.log('imageCropped: ', event);
  }

  public imageLoaded(img: LoadedImage): void {
    console.log('image loaded: ', img);
  } */

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
      { ...this._visualStaticPinsService.returnTemplateDataObject() }
    );
    // Also patch image type form controls.
    this.photos = this.form.controls['images180'].value || [];
  }

  private sendFormDataToService(formData: FormData): void {
    this._visualStaticPinsService.updateTemplateDataObject(formData);
  }

}
