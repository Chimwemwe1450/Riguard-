import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { PostInspectionService } from '../post-inspection.service';

@Component({
  selector: 'app-post-inspection-views-step-eight',
  templateUrl: './post-inspection-views-step-eight.page.html',
  styleUrls: ['./post-inspection-views-step-eight.page.scss'],
})
export class PostInspectionViewsStepEightPage implements OnInit {

  public heading = this._postInspectionService.getInspectionHeading();
  public step = 8;
  public stepCount = this._postInspectionService.stepCount;
  public stepDescription = 'Coat all exposed metal services';
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
      COAT_EXP_METAL_SERV_STATE: new FormControl(null, {
        validators: [Validators.required]
      }),
      COAT_EXP_METAL_SERV_COMMENT: new FormControl(''),
      COAT_EXP_METAL_SERV_DESC: new FormControl(this.stepDescription, {
        validators: [Validators.required]
      }),
      COAT_EXP_METAL_SERV_STEP: new FormControl(this.step.toString(), {
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
