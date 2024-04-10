import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { InspectionsListService } from '../../inspections-list/inspections-list.service';
import { BwmService } from '../bwm.service';

@Component({
  selector: 'app-bwm-views-step-nine',
  templateUrl: './bwm-views-step-nine.page.html',
  styleUrls: ['./bwm-views-step-nine.page.scss'],
})
export class BwmViewsStepNinePage implements OnInit {

  public heading = this._bwmService.getInspectionHeading();
  public step = 9;
  public stepCount = this._bwmService.stepCount;
  public stepDescription = 'Summary of Pin side inspection';
  public form: FormGroup;
  public validForm = false;
  public navigateNext = false;
  public critProcedure = {ac: 'n/a', rp: 'n/a'};

  constructor(
    private _bwmService: BwmService,
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
      MAIN_TUBE_PIN_SIDE_FORM_2_STATUS: new FormControl(null, {
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
      { ...this._bwmService.returnTemplateDataObject() }
    );
  }

  private sendFormDataToService(formData: FormData): void {
    this._bwmService.updateTemplateDataObject(formData);
  }

}
