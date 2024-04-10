import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { PostInspectionService } from '../post-inspection.service';

@Component({
  selector: 'app-post-inspection-views-step-five',
  templateUrl: './post-inspection-views-step-five.page.html',
  styleUrls: ['./post-inspection-views-step-five.page.scss'],
})
export class PostInspectionViewsStepFivePage implements OnInit {

  public heading = this._postInspectionService.getInspectionHeading();
  public step = 5;
  public stepCount = this._postInspectionService.stepCount;
  public stepDescription = 'Check markings on fasteners to prove they are torqued';
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
      CHECK_FASTENER_MARKINGS_STATE: new FormControl(null, {
        validators: [Validators.required]
      }),
      CHECK_FASTENER_MARKINGS_COMMENT: new FormControl(''),
      CHECK_FASTENER_MARKINGS_DESC: new FormControl(this.stepDescription, {
        validators: [Validators.required]
      }),
      CHECK_FASTENER_MARKINGS_STEP: new FormControl(this.step.toString(), {
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
