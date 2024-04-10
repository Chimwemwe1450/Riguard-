import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { InspectionsListService } from '../../inspections-list/inspections-list.service';
import { VisualStaticPinsService } from '../visual-static-pins.service';

@Component({
  selector: 'app-visual-static-pins-views-step-three',
  templateUrl: './visual-static-pins-views-step-three.page.html',
  styleUrls: ['./visual-static-pins-views-step-three.page.scss'],
})
export class VisualStaticPinsViewsStepThreePage implements OnInit {

  public heading = this._visualStaticPinsService.getInspectionHeading();
  public form: FormGroup;
  public validForm = false;
  public navigateNext = false;
  public critProcedure = {ac: 'n/a', rp: 'n/a'};

  constructor(
    private _visualStaticPinsService: VisualStaticPinsService,
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
      pinSideHardFacingType: new FormControl(null, {
        validators: [Validators.required]
      }),
      pinSideHardFacingScoring: new FormControl(null, {
        validators: [Validators.required]
      }),
      pinSideHardFacingPitting: new FormControl(null, {
        validators: [Validators.required]
      }),
      pinSideHardFacingGalling: new FormControl(null, {
        validators: [Validators.required]
      }),
      pinSideHardFacingLeadInMechanicalDamage: new FormControl(null, {
        validators: [Validators.required]
      }),
      pinSideHardFacingLeadInPitting: new FormControl(null, {
        validators: [Validators.required]
      }),
      pinSideHardFacingMechanicalDamage: new FormControl(null, {
        validators: [Validators.required]
      }),
      pinSideHardFacingMinorRepair: new FormControl(null, {
        validators: [Validators.required]
      }),
      intermediateBoxSideSealArea: new FormControl(null, {
        validators: [Validators.required]
      }),
      intermediateBoxSideScoring: new FormControl(null, {
        validators: [Validators.required]
      }),
      intermediateBoxSidePitting: new FormControl(null, {
        validators: [Validators.required]
      }),
      intermediateBoxSideGalling: new FormControl(null, {
        validators: [Validators.required]
      }),
      intermediateBoxSideLeadInMechanicalDamage: new FormControl(null, {
        validators: [Validators.required]
      }),
      intermediateBoxSideLeadInPitting: new FormControl(null, {
        validators: [Validators.required]
      }),
      intermediateBoxSideMechanicalDamage: new FormControl(null, {
        validators: [Validators.required]
      }),
      intermediateBoxSideMinorRepair: new FormControl(null, {
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
      { ...this._visualStaticPinsService.returnTemplateDataObject() }
    );
  }

  private sendFormDataToService(formData: FormData): void {
    this._visualStaticPinsService.updateTemplateDataObject(formData);
  }

}
