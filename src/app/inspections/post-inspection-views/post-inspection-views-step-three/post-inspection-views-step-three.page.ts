import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { PostInspectionService } from '../post-inspection.service';

@Component({
  selector: 'app-post-inspection-views-step-three',
  templateUrl: './post-inspection-views-step-three.page.html',
  styleUrls: ['./post-inspection-views-step-three.page.scss'],
})
export class PostInspectionViewsStepThreePage implements OnInit {

  public heading = this._postInspectionService.getInspectionHeading();
  public step = 3;
  public stepCount = this._postInspectionService.stepCount;
  public stepDescription = 'Ensure short-term or long-term preservation has been carried out';
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
      PRESERVATION_DONE_STATE: new FormControl(null, {
        validators: [Validators.required]
      }),
      PRESERVATION_DONE_COMMENT: new FormControl(''),
      PRESERVATION_DONE_DESC: new FormControl(this.stepDescription, {
        validators: [Validators.required]
      }),
      PRESERVATION_DONE_STEP: new FormControl(this.step.toString(), {
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
