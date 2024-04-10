import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { InspectionsListService } from '../../inspections-list/inspections-list.service';
import { VisualPinAuxService } from '../visual-pin-aux-line.service';

@Component({
  selector: 'app-visual-pin-aux-line-views-step-three',
  templateUrl: './visual-pin-aux-line-views-step-three.page.html',
  styleUrls: ['./visual-pin-aux-line-views-step-three.page.scss'],
})
export class VisualPinAuxViewsStepThreePage implements OnInit {

  public heading = this._visualPinService.getInspectionHeading();
  public step = 3;
  public stepCount = this._visualPinService.stepCount;
  public stepDescription = 'Pre-Inspection Information';
  public form: FormGroup;
  public validForm = false;
  public navigateNext = false;
  public critProcedure = {ac: 'n/a', rp: 'n/a'};

  constructor(
    private _visualPinService: VisualPinAuxService,
    private _inspectionsListService: InspectionsListService
  ) { }

  ngOnInit() {
    this.addCritProcedure();
    this.createForm();
    this.subscribeToForm();
    this.patchForm();
  }

  public navigateToNext(event): void {
    this.navigateNext = event;
  }

  private addCritProcedure(): void {
    if (this._inspectionsListService.currentQcp) {
      this.critProcedure.ac = this._inspectionsListService.currentQcp.acceptanceCriteria;
      this.critProcedure.rp = this._inspectionsListService.currentQcp.referenceProcedure;
    }
  }

  private createForm() {
    this.form = new FormGroup({
      VIS_FORM_1_COMPONENT_TRACEBILITY: new FormControl(null, {
        validators: [Validators.required]
      }),
      VIS_FORM_1_LEAD_IN_MECH_DAM: new FormControl(null, {
        validators: [Validators.required]
      }),
      VIS_FORM_1_LEAD_IN_PITTING: new FormControl(null, {
        validators: [Validators.required]
      }),
      VIS_FORM_1_MINOR_REPAIR: new FormControl(null, {
        validators: [Validators.required]
      }),
      VIS_FORM_1_NOTES: new FormControl(''),
      VIS_FORM_1_PIN_GALLING: new FormControl(null, {
        validators: [Validators.required]
      }),
      VIS_FORM_1_PIN_HARDFACING: new FormControl(null, {
        validators: [Validators.required]
      }),
      VIS_FORM_1_PIN_MECH_DAM: new FormControl(null, {
        validators: [Validators.required]
      }),
      VIS_FORM_1_PIN_PITTING: new FormControl(null, {
        validators: [Validators.required]
      }),
      VIS_FORM_1_PIN_SCORING: new FormControl(null, {
        validators: [Validators.required]
      }),
      VIS_FORM_1_STATUS: new FormControl(null, {
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
      { ...this._visualPinService.returnTemplateDataObject() }
    );
  }

  private sendFormDataToService(formData: FormData): void {
    this._visualPinService.updateTemplateDataObject(formData);
  }

}
