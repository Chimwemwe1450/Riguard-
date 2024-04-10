import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { PostInspectionService } from '../post-inspection.service';

@Component({
  selector: 'app-post-inspection-views-step-ten',
  templateUrl: './post-inspection-views-step-ten.page.html',
  styleUrls: ['./post-inspection-views-step-ten.page.scss'],
})
export class PostInspectionViewsStepTenPage implements OnInit {

  public heading = this._postInspectionService.getInspectionHeading();
  public step = 10;
  public stepCount = this._postInspectionService.stepCount;
  public stepDescription = 'Install protectors';
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

    this.form.patchValue({complete: false});
  }

  public navigateToNext(event): void {
    this.navigateNext = event;
  }

  private createForm() {
    this.form = new FormGroup({
      INSTALL_PRO_STATE: new FormControl(null, {
        validators: [Validators.required]
      }),
      INSTALL_PRO_COMMENT: new FormControl(''),
      INSTALL_PRO_DESC: new FormControl(this.stepDescription, {
        validators: [Validators.required]
      }),
      INSTALL_PRO_STEP: new FormControl(this.step.toString(), {
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
