import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { InspectionsListService } from '../../inspections-list/inspections-list.service';
import { ManualInspectionService } from '../manual-inspection.service';

@Component({
  selector: 'app-manual-views-step-one',
  templateUrl: './manual-views-step-one.page.html',
  styleUrls: ['./manual-views-step-one.page.scss'],
})
export class ManualViewsStepOnePage implements OnInit {

  public heading = this._manualInspectionService.getInspectionHeading();
  public step = 1;
  public stepCount = this._manualInspectionService.stepCount;
  public stepDescription = 'Manual Inspection';
  public form: FormGroup;
  public validForm = false;
  public navigateNext = false;
  public critProcedure = {ac: 'n/a', rp: 'n/a'};

  constructor(
    private _manualInspectionService: ManualInspectionService,
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
      ManualInspectionStatus: new FormControl(null, {
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
      { ...this._manualInspectionService.returnTemplateDataObject() }
    );
  }

  private sendFormDataToService(formData: FormData): void {
    this._manualInspectionService.updateTemplateDataObject(formData);
  }

}
