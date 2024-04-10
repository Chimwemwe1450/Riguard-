import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { PostInspectionService } from '../post-inspection.service';

@Component({
  selector: 'app-post-inspection-views-step-six',
  templateUrl: './post-inspection-views-step-six.page.html',
  styleUrls: ['./post-inspection-views-step-six.page.scss'],
})
export class PostInspectionViewsStepSixPage implements OnInit {

  public heading = this._postInspectionService.getInspectionHeading();
  public step = 6;
  public stepCount = this._postInspectionService.stepCount;
  public stepDescription = 'Fit protective covers';
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
      FIT_PROTECTIVE_COVERS_STATE: new FormControl(null, {
        validators: [Validators.required]
      }),
      FIT_PROTECTIVE_COVERS_COMMENT: new FormControl(''),
      FIT_PROTECTIVE_COVERS_DESC: new FormControl(this.stepDescription, {
        validators: [Validators.required]
      }),
      FIT_PROTECTIVE_COVERS_STEP: new FormControl(this.step.toString(), {
        validators: [Validators.required]
      }),
      STATUS: new FormControl(null, {
        validators: [Validators.required]
      }),
      complete: new FormControl(false)
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
