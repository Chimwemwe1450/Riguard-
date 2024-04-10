import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { BwmService } from '../bwm.service';
import { InspectionsListService } from '../../inspections-list/inspections-list.service';

@Component({
  selector: 'app-bwm-views-step-five',
  templateUrl: './bwm-views-step-five.page.html',
  styleUrls: ['./bwm-views-step-five.page.scss'],
})
export class BwmViewsStepFivePage implements OnInit {

  public heading = this._bwmService.getInspectionHeading();
  public step = 5;
  public stepCount = this._bwmService.stepCount;
  public stepDescription = 'Pin side summary (excluding HYD pins)';
  public form: FormGroup;
  public validForm = false;
  public navigateNext = false;
  public critProcedure = {ac: 'n/a', rp: 'n/a'};

  // image array to patch onto form.
  public photos: string[] = [];

  constructor(
    private _bwmService: BwmService,
    private _inspectionsListService: InspectionsListService
  ) { }

  ngOnInit() {
    this.addCritProcedure();
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



  private addCritProcedure(): void {
    if (this._inspectionsListService.currentQcp) {
      this.critProcedure.ac = this._inspectionsListService.currentQcp.acceptanceCriteria;
      this.critProcedure.rp = this._inspectionsListService.currentQcp.referenceProcedure;
    }
  }

  private createForm(): void {
    this.form = new FormGroup({
      MAIN_TUBE_PIN_SIDE_CONNECTOR_FORM_2_STATUS: new FormControl(null, {
        validators: [Validators.required]
      }),
      notesExclHyd: new FormControl(''),
      inspectionArea: new FormControl(null, {
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
      { ...this._bwmService.returnTemplateDataObject() }
    );
    // Also patch image type form controls.
    this.photos = this.form.controls['images'].value || [];
  }

  private sendFormDataToService(formData: FormData): void {
    this._bwmService.updateTemplateDataObject(formData);
  }

}
