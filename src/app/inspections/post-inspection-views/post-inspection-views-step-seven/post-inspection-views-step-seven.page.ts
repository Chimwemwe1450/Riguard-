import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { PostInspectionService } from '../post-inspection.service';

@Component({
  selector: 'app-post-inspection-views-step-seven',
  templateUrl: './post-inspection-views-step-seven.page.html',
  styleUrls: ['./post-inspection-views-step-seven.page.scss'],
})
export class PostInspectionViewsStepSevenPage implements OnInit {

  public heading = this._postInspectionService.getInspectionHeading();
  public step = 7;
  public stepCount = this._postInspectionService.stepCount;
  public stepDescription = 'Lubricate/Preserve all female connectors, except hydraulic';
  public form: FormGroup;
  public validForm = false;
  public navigateNext = false;

  constructor(
    private _postInspectionService: PostInspectionService
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
      LUB_PR_FEMALE_CON_STATE: new FormControl(null, {
        validators: [Validators.required]
      }),
      LUB_PR_FEMALE_CON_COMMENT: new FormControl(''),
      LUB_PR_FEMALE_CON_DESC: new FormControl(this.stepDescription, {
        validators: [Validators.required]
      }),
      LUB_PR_FEMALE_CON_STEP: new FormControl(this.step.toString(), {
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
      { ...this._postInspectionService.returnTemplateDataObject() }
    );
  }

  private sendFormDataToService(formData: FormData): void {
    this._postInspectionService.updateTemplateDataObject(formData);
  }

}
