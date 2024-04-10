import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { InspectionsListService } from '../../inspections-list/inspections-list.service';
import { DyePenService } from '../dye-pen.service';

@Component({
  selector: 'app-dye-pen-views-step-six',
  templateUrl: './dye-pen-views-step-six.page.html',
  styleUrls: ['./dye-pen-views-step-six.page.scss'],
})
export class DyePenViewsStepSixPage implements OnInit {

  public heading = this._dyePenService.getInspectionHeading();
  public step = 6;
  public stepCount = this._dyePenService.stepCount;
  public stepDescription = 'Pre-Inspection Information';
  public form: FormGroup;
  public validForm = false;
  public navigateNext = false;
  public critProcedure = {ac: 'n/a', rp: 'n/a'};

  constructor(
    private _dyePenService: DyePenService,
    private _inspectionsListService: InspectionsListService,
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
      COMPONENT_TRACEABILITY: new FormControl(null, {
        validators: [Validators.required]
      }),
      INSPECTION_STATUS: new FormControl(null, {
        validators: [Validators.required]
      }),
      indicationDataList: new FormControl(null),
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
      { ...this._dyePenService.returnTemplateDataObject() }
    );
  }

  private sendFormDataToService(formData: FormData): void {
    this._dyePenService.updateTemplateDataObject(formData);
  }

}
