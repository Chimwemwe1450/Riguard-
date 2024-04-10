import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { PreInspectionService } from '../pre-inspection.service';

@Component({
  selector: 'app-pre-inspection-views-step-five',
  templateUrl: './pre-inspection-views-step-five.page.html',
  styleUrls: ['./pre-inspection-views-step-five.page.scss'],
})
export class PreInspectionViewsStepFivePage implements OnInit {

  public heading = this._preInspectionService.getInspectionHeading();
  public step = 5;
  public stepCount = this._preInspectionService.stepCount;
  public stepDescription = 'Visual of buoyancy, guide fins, bumper guard, thrust collars, and clamps';
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
      VISUAL_FINS_GUARD_COLLAR_CLAMPS_STATE: new FormControl(null, {
        validators: [Validators.required]
      }),
      VISUAL_FINS_GUARD_COLLAR_CLAMPS_COMMENT: new FormControl(''),
      VISUAL_FINS_GUARD_COLLAR_CLAMPS_DESC: new FormControl(this.stepDescription, {
        validators: [Validators.required]
      }),
      VISUAL_FINS_GUARD_COLLAR_CLAMPS_STEP: new FormControl(this.step.toString(), {
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
