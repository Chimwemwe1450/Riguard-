import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { PreInspectionService } from '../pre-inspection.service';

@Component({
  selector: 'app-pre-inspection-views-step-two',
  templateUrl: './pre-inspection-views-step-two.page.html',
  styleUrls: ['./pre-inspection-views-step-two.page.scss'],
})
export class PreInspectionViewsStepTwoPage implements OnInit {

  public heading = this._preInspectionService.getInspectionHeading();
  public step = 2;
  public stepCount = this._preInspectionService.stepCount;
  public stepDescription = 'Identify riser tag numbers & serial numbers';
  public form: FormGroup;
  public validForm = false;
  public navigateNext = false;

  constructor(
    private _preInspectionService: PreInspectionService
  ) { }

  ngOnInit() {
    this.createForm();
    this.subscribeToForm();
    this.patchForm();
  }

  public navigateToNext(event): void {
    this.navigateNext = event;
  }

  private createForm() {
    this.form = new FormGroup({
      IDENTIFY_TAG_AND_SERIAL_STATE: new FormControl(null, {
        validators: [Validators.required]
      }),
      IDENTIFY_TAG_AND_SERIAL_COMMENT: new FormControl(''),
      IDENTIFY_TAG_AND_SERIAL_DESC: new FormControl(this.stepDescription, {
        validators: [Validators.required]
      }),
      IDENTIFY_TAG_AND_SERIAL_STEP: new FormControl(this.step.toString(), {
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
      { ...this._preInspectionService.returnTemplateDataObject() }
    );
  }

  private sendFormDataToService(formData: FormData): void {
    this._preInspectionService.updateTemplateDataObject(formData);
  }

}
