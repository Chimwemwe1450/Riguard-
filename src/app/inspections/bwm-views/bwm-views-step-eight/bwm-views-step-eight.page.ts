import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { BwmService } from '../bwm.service';

@Component({
  selector: 'app-bwm-views-step-eight',
  templateUrl: './bwm-views-step-eight.page.html',
  styleUrls: ['./bwm-views-step-eight.page.scss'],
})
export class BwmViewsStepEightPage implements OnInit {

  public heading = this._bwmService.getInspectionHeading();
  public step = 8;
  public stepCount = this._bwmService.stepCount;
  public stepDescription = 'Hyd Pin Anode Dimensions';
  public form: FormGroup;
  public validForm = false;
  public navigateNext = false;

  constructor(
    private _bwmService: BwmService
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
      HYD_ANODE_FORM_2_DIM_A_ANODE: new FormControl(null, {
        validators: [Validators.required]
      }),
      HYD_ANODE_FORM_2_DIM_B_ANODE: new FormControl(null, {
        validators: [Validators.required]
      }),
      HYD_ANODE_FORM_2_DIM_C_ANODE: new FormControl(null, {
        validators: [Validators.required]
      }),
      HYD_ANODE_FORM_2_CONTINUITY_TEST: new FormControl(null, {
        validators: [Validators.required]
      }),
      HYD_ANODE_B_FORM_2_DIM_A_ANODE: new FormControl(null, {
        validators: [Validators.required]
      }),
      HYD_ANODE_B_FORM_2_DIM_B_ANODE: new FormControl(null, {
        validators: [Validators.required]
      }),
      HYD_ANODE_B_FORM_2_DIM_C_ANODE: new FormControl(null, {
        validators: [Validators.required]
      }),
      HYD_ANODE_B_FORM_2_CONTINUITY_TEST: new FormControl(null, {
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
  }

  private sendFormDataToService(formData: FormData): void {
    this._bwmService.updateTemplateDataObject(formData);
  }

}
