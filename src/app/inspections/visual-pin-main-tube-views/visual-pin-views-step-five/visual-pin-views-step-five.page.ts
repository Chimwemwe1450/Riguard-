import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { InspectionsListService } from '../../inspections-list/inspections-list.service';
import { VisualPinService } from '../visual-pin.service';

@Component({
  selector: 'app-visual-pin-views-step-five',
  templateUrl: './visual-pin-views-step-five.page.html',
  styleUrls: ['./visual-pin-views-step-five.page.scss'],
})
export class VisualPinViewsStepFivePage implements OnInit {

  public heading = this._visualPinService.getInspectionHeading();
  public step = 5;
  public stepCount = this._visualPinService.stepCount;
  public stepDescription = 'Pre-Inspection Information';
  public form: FormGroup;
  public validForm = false;
  public navigateNext = false;
  public critProcedure = {ac: 'n/a', rp: 'n/a'};
  public componentDesc = this._inspectionsListService.currentQcp.componentDescription;

  constructor(
    private _visualPinService: VisualPinService,
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
      VIS_FORM_1_SEAL_AREA: new FormControl(null, {
        validators: [Validators.required]
      }),
      VIS_FORM_1_LEAD_IN_MECH_DAM: new FormControl(null, {
        validators: [Validators.required]
      }),
      VIS_FORM_1_LEAD_IN_PITTING: new FormControl(null, {
        validators: [Validators.required]
      }),
      VIS_FORM_1_GROOVE_SCORING: new FormControl(null, {
        validators: [Validators.required]
      }),
      VIS_FORM_1_GROOVE_PITTING: new FormControl(null, {
        validators: [Validators.required]
      }),
      VIS_FORM_1_GROOVE_SEAL_DAMAGE: new FormControl(null, {
        validators: [Validators.required]
      }),
      VIS_FORM_1_SEAL_SCORING: new FormControl(null, {
        validators: [Validators.required]
      }),
      VIS_FORM_1_SEAL_GALLING: new FormControl(null, {
        validators: [Validators.required]
      }),
      VIS_FORM_1_SEAL_PITTING: new FormControl(null, {
        validators: [Validators.required]
      }),
      VIS_FORM_1_MINOR_REPAIR: new FormControl(null, {
        validators: [Validators.required]
      }),
      VIS_FORM_1_STATUS: new FormControl(null, {
        validators: [Validators.required]
      }),
      VIS_FORM_1_NOTES: new FormControl('')
    });
    this.templateChange();
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

  private templateChange(): void {
    if (this.componentDesc === 'SS') {
      this.form.controls.VIS_FORM_1_SEAL_GALLING.disable();
    } else {
      this.form.controls.VIS_FORM_1_GROOVE_SCORING.disable();
      this.form.controls.VIS_FORM_1_GROOVE_PITTING.disable();
      this.form.controls.VIS_FORM_1_GROOVE_SEAL_DAMAGE.disable();
    }
  }

}
