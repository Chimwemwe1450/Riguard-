import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { InspectionsListService } from '../../inspections-list/inspections-list.service';
import { VisualBoxAuxService } from '../visual-box.service';

@Component({
  selector: 'app-visual-box-views-step-three',
  templateUrl: './visual-box-views-step-three.page.html',
  styleUrls: ['./visual-box-views-step-three.page.scss'],
})
export class VisualBoxAuxViewsStepThreePage implements OnInit {

  public heading = this._visualBoxService.getInspectionHeading();
  public step = 3;
  public stepCount = this._visualBoxService.stepCount;
  public stepDescription = 'Pre-Inspection Information';
  public form: FormGroup;
  public validForm = false;
  public navigateNext = false;
  public critProcedure = {ac: 'n/a', rp: 'n/a'};

  constructor(
    private _visualBoxService: VisualBoxAuxService,
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
      VIS_FORM_1_GROOVE_DAMAGE_CAUSE: new FormControl(null, {
        validators: [Validators.required]
      }),
      VIS_FORM_1_GROOVE_PITTING: new FormControl(null, {
        validators: [Validators.required]
      }),
      VIS_FORM_1_GROOVE_SCORING: new FormControl(null, {
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
      VIS_FORM_1_SEAL_AREA: new FormControl(null, {
        validators: [Validators.required]
      }),
      VIS_FORM_1_STATUS: new FormControl(null, {
        validators: [Validators.required]
      }),
      VIS_FORM_1_THROUGH_GALLING: new FormControl(null, {
        validators: [Validators.required]
      }),
      VIS_FORM_1_THROUGH_PITTING: new FormControl(null, {
        validators: [Validators.required]
      }),
      VIS_FORM_1_THROUGH_SCORING: new FormControl(null, {
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
      { ...this._visualBoxService.returnTemplateDataObject() }
    );
  }

  private sendFormDataToService(formData: FormData): void {
    this._visualBoxService.updateTemplateDataObject(formData);
  }

}
