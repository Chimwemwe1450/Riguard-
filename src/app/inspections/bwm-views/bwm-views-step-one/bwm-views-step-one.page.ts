import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { BwmService } from '../bwm.service';

@Component({
  selector: 'app-bwm-views-step-one',
  templateUrl: './bwm-views-step-one.page.html',
  styleUrls: ['./bwm-views-step-one.page.scss'],
})
export class BwmViewsStepOnePage implements OnInit {

  public heading = this._bwmService.getInspectionHeading();
  public step = 1;
  public stepCount = this._bwmService.stepCount;
  public stepDescription = 'Main Tube - Pins side inspection';
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
      MAIN_PIN_CONNECTOR_FORM_2_SCORING: new FormControl(null, {
        validators: [Validators.required]
      }),
      MAIN_PIN_CONNECTOR_FORM_2_MECH_DAMAGE: new FormControl(null, {
        validators: [Validators.required]
      }),
      MAIN_PIN_CONNECTOR_FORM_2_STATUS: new FormControl(null, {
        validators: [Validators.required]
      }),
      MAIN_PIN_CONNECTOR_FORM_2_PITTING: new FormControl(null, {
        validators: [Validators.required]
      }),
      MAIN_PIN_CONNECTOR_FORM_2_COMMENT: new FormControl(null, {
        validators: [Validators.required]
      }),
      MAIN_PIN_CONNECTOR_FORM_2_NAME: new FormControl('Main Pin Connector', {
        validators: [Validators.required]
      }),
      MAIN_PIN_CONNECTOR_FORM_2_QUANTITY: new FormControl('1', {
        validators: [Validators.required]
      }),
      MAIN_PIN_ALIGNMENT_KEY_FORM_2_MECH_DAMAGE: new FormControl(null, {
        validators: [Validators.required]
      }),
      MAIN_PIN_ALIGNMENT_KEY_FORM_2_COMMENT: new FormControl(null, {
        validators: [Validators.required]
      }),
      MAIN_PIN_ALIGNMENT_KEY_FORM_2_STATUS: new FormControl(null, {
        validators: [Validators.required]
      }),
      MAIN_PIN_ALIGNMENT_KEY_FORM_2_NAME: new FormControl('Main Pin Alignment Key', {
        validators: [Validators.required]
      }),
      MAIN_PIN_ALIGNMENT_KEY_FORM_2_QUANTITY: new FormControl('1', {
        validators: [Validators.required]
      }),
      CHOKE_STOP_NUT_AND_THREAD_FORM_2_MECH_DAMAGE: new FormControl(null, {
        validators: [Validators.required]
      }),
      CHOKE_STOP_NUT_AND_THREAD_FORM_2_COMMENT: new FormControl(null, {
        validators: [Validators.required]
      }),
      CHOKE_STOP_NUT_AND_THREAD_FORM_2_GRUB_SCREWS_IN_PLACE: new FormControl(null, {
        validators: [Validators.required]
      }),
      CHOKE_STOP_NUT_AND_THREAD_FORM_2_STATUS: new FormControl(null, {
        validators: [Validators.required]
      }),
      CHOKE_STOP_NUT_AND_THREAD_FORM_2_NAME: new FormControl('Choke Stop Nut & Thread', {
        validators: [Validators.required]
      }),
      CHOKE_STOP_NUT_AND_THREAD_FORM_2_QUANTITY: new FormControl('1', {
        validators: [Validators.required]
      }),
      KILL_STOP_NUT_AND_THREAD_FORM_2_MECH_DAMAGE: new FormControl(null, {
        validators: [Validators.required]
      }),
      KILL_STOP_NUT_AND_THREAD_FORM_2_COMMENT: new FormControl(null, {
        validators: [Validators.required]
      }),
      KILL_STOP_NUT_AND_THREAD_FORM_2_GRUB_SCREWS_IN_PLACE: new FormControl(null, {
        validators: [Validators.required]
      }),
      KILL_STOP_NUT_AND_THREAD_FORM_2_STATUS: new FormControl(null, {
        validators: [Validators.required]
      }),
      KILL_STOP_NUT_AND_THREAD_FORM_2_NAME: new FormControl('Kill Stop Nut & Thread', {
        validators: [Validators.required]
      }),
      KILL_STOP_NUT_AND_THREAD_FORM_2_QUANTITY: new FormControl('1', {
        validators: [Validators.required]
      }),
      BOOSTER_STOP_NUT_AND_THREAD_FORM_2_MECH_DAMAGE: new FormControl(null, {
        validators: [Validators.required]
      }),
      BOOSTER_STOP_NUT_AND_THREAD_FORM_2_COMMENT: new FormControl(null, {
        validators: [Validators.required]
      }),
      BOOSTER_STOP_NUT_AND_THREAD_FORM_2_GRUB_SCREWS_IN_PLACE: new FormControl(null, {
        validators: [Validators.required]
      }),
      BOOSTER_STOP_NUT_AND_THREAD_FORM_2_STATUS: new FormControl(null, {
        validators: [Validators.required]
      }),
      BOOSTER_STOP_NUT_AND_THREAD_FORM_2_NAME: new FormControl('Booster Stop Nut & Thread', {
        validators: [Validators.required]
      }),
      BOOSTER_STOP_NUT_AND_THREAD_FORM_2_QUANTITY: new FormControl('1', {
        validators: [Validators.required]
      }),
      HYD_1_STOP_NUT_AND_THREAD_FORM_2_MECH_DAMAGE: new FormControl(null, {
        validators: [Validators.required]
      }),
      HYD_1_STOP_NUT_AND_THREAD_FORM_2_COMMENT: new FormControl(null, {
        validators: [Validators.required]
      }),
      HYD_1_STOP_NUT_AND_THREAD_GRUB_SCREWS_IN_PLACE: new FormControl(null, {
        validators: [Validators.required]
      }),
      HYD_1_STOP_NUT_AND_THREAD_FORM_2_STATUS: new FormControl(null, {
        validators: [Validators.required]
      }),
      HYD_1_STOP_NUT_AND_THREAD_FORM_2_NAME: new FormControl('Hyd 1 Stop Nut & Thread', {
        validators: [Validators.required]
      }),
      HYD_1_STOP_NUT_AND_THREAD_FORM_2_QUANTITY: new FormControl('1', {
        validators: [Validators.required]
      }),
      HYD_2_STOP_NUT_AND_THREAD_FORM_2_MECH_DAMAGE: new FormControl(null, {
        validators: [Validators.required]
      }),
      HYD_2_STOP_NUT_AND_THREAD_FORM_2_COMMENT: new FormControl(null, {
        validators: [Validators.required]
      }),
      HYD_2_STOP_NUT_AND_THREAD_FORM_2_GRUB_SCREWS_IN_PLACE: new FormControl(null, {
        validators: [Validators.required]
      }),
      HYD_2_STOP_NUT_AND_THREAD_FORM_2_STATUS: new FormControl(null, {
        validators: [Validators.required]
      }),
      HYD_2_STOP_NUT_AND_THREAD_FORM_2_NAME: new FormControl('Hyd 2 Stop Nut & Thread', {
        validators: [Validators.required]
      }),
      HYD_2_STOP_NUT_AND_THREAD_FORM_2_QUANTITY: new FormControl('1', {
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
