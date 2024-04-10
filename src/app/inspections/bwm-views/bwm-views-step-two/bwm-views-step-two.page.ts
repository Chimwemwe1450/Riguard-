import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { BwmService } from '../bwm.service';

@Component({
  selector: 'app-bwm-views-step-two',
  templateUrl: './bwm-views-step-two.page.html',
  styleUrls: ['./bwm-views-step-two.page.scss'],
})
export class BwmViewsStepTwoPage implements OnInit {

  public heading = this._bwmService.getInspectionHeading();
  public step = 2;
  public stepCount = this._bwmService.stepCount;
  public stepDescription = 'Choke Pin Connector';
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
      CHOKE_PIN_CONNECTOR_FORM_2_SCORING: new FormControl(null, {
        validators: [Validators.required]
      }),
      CHOKE_PIN_CONNECTOR_FORM_2_MECH_DAMAGE: new FormControl(null, {
        validators: [Validators.required]
      }),
      CHOKE_PIN_CONNECTOR_FORM_2_STATUS: new FormControl(null, {
        validators: [Validators.required]
      }),
      CHOKE_PIN_CONNECTOR_FORM_2_PITTING: new FormControl(null, {
        validators: [Validators.required]
      }),
      CHOKE_PIN_CONNECTOR_FORM_2_COMMENT: new FormControl(null, {
        validators: [Validators.required]
      }),
      CHOKE_PIN_CONNECTOR_FORM_2_NAME: new FormControl('Choke Pin Connector', {
        validators: [Validators.required]
      }),
      CHOKE_PIN_CONNECTOR_FORM_2_QUANTITY: new FormControl('1', {
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
