import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { PostInspectionService } from '../post-inspection.service';

@Component({
  selector: 'app-post-inspection-views-step-one',
  templateUrl: './post-inspection-views-step-one.page.html',
  styleUrls: ['./post-inspection-views-step-one.page.scss'],
})
export class PostInspectionViewsStepOnePage implements OnInit {

  public heading = this._postInspectionService.getInspectionHeading();
  public step = 1;
  public stepCount = this._postInspectionService.stepCount;
  public stepDescription = 'Blow out lines, ensure no foreign objects are present';
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
      BLOW_OUT_LINES_STATE: new FormControl(null, {
        validators: [Validators.required]
      }),
      BLOW_OUT_LINES_COMMENT: new FormControl(''),
      BLOW_OUT_LINES_DESC: new FormControl(this.stepDescription, {
        validators: [Validators.required]
      }),
      BLOW_OUT_LINES_STEP: new FormControl(this.step.toString(), {
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
