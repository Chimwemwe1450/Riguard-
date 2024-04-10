import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { InspectionsListService } from '../../inspections-list/inspections-list.service';
import { VisualDynamicPinsService } from '../visual-dynamic-pins.service';

@Component({
  selector: 'app-visual-dynamic-pins-views-step-three',
  templateUrl: './visual-dynamic-pins-views-step-three.page.html',
  styleUrls: ['./visual-dynamic-pins-views-step-three.page.scss'],
})
export class VisualDynamicPinsViewsStepThreePage implements OnInit {

  public heading = this._visualDynamicPinsService.getInspectionHeading();
  public form: FormGroup;
  public validForm = false;
  public navigateNext = false;
  public critProcedure = {ac: 'n/a', rp: 'n/a'};

  constructor(
    private _visualDynamicPinsService: VisualDynamicPinsService,
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
      serialNumber: new FormControl(null, {
        validators: [Validators.required]
      }),
      pinSideHardFacing: new FormControl(null, {
        validators: [Validators.required]
      }),
      pinSideScoring: new FormControl(null, {
        validators: [Validators.required]
      }),
      pinSidePitting: new FormControl(null, {
        validators: [Validators.required]
      }),
      pinSideGalling: new FormControl(null, {
        validators: [Validators.required]
      }),
      pinSideLeadInMechanicalDamage: new FormControl(null, {
        validators: [Validators.required]
      }),
      pinSideLeadInPitting: new FormControl(null, {
        validators: [Validators.required]
      }),
      pinSideHardFacingMechanicalDamage: new FormControl(null, {
        validators: [Validators.required]
      }),
      pinSideMinorRepair: new FormControl(null, {
        validators: [Validators.required]
      }),
      immediateBoxSideSealArea: new FormControl(null, {
        validators: [Validators.required]
      }),
      immediateBoxSideScoring: new FormControl(null, {
        validators: [Validators.required]
      }),
      immediateBoxSidePitting: new FormControl(null, {
        validators: [Validators.required]
      }),
      immediateBoxSideGalling: new FormControl(null, {
        validators: [Validators.required]
      }),
      immediateBoxSideLeadInMechanicalDamage: new FormControl(null, {
        validators: [Validators.required]
      }),
      immediateBoxSideLeadInPitting: new FormControl(null, {
        validators: [Validators.required]
      }),
      immediateBoxSideMechanicalDamage: new FormControl(null, {
        validators: [Validators.required]
      }),
      immediateBoxSideMinorRepair: new FormControl(null, {
        validators: [Validators.required]
      }),
      inspectionResult: new FormControl(null, {
        validators: [Validators.required]
      }),
      notes: new FormControl('')
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
      { ...this._visualDynamicPinsService.returnTemplateDataObject() }
    );
  }

  private sendFormDataToService(formData: FormData): void {
    this._visualDynamicPinsService.updateTemplateDataObject(formData);
  }

}
