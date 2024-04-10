import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ToastService } from 'src/app/shared/services/toast.service';
import { InspectionsListService } from '../../inspections-list/inspections-list.service';
import { DyePenService } from '../dye-pen.service';

@Component({
  selector: 'app-dye-pen-views-step-one',
  templateUrl: './dye-pen-views-step-one.page.html',
  styleUrls: ['./dye-pen-views-step-one.page.scss'],
})
export class DyePenViewsStepOnePage implements OnInit {

  public heading = this._dyePenService.getInspectionHeading();
  public step = 1;
  public stepCount = this._dyePenService.stepCount;
  public stepDescription = 'Pre-Inspection Information';
  public form: FormGroup;
  public validForm = false;
  public navigateNext = false;
  public critProcedure = {ac: 'n/a', rp: 'n/a'};

  constructor(
    private _dyePenService: DyePenService,
    private _inspectionsListService: InspectionsListService,
    private _toastService: ToastService
  ) { }

  ngOnInit() {
    this.addCritProcedure();
    this.createForm();
    this.subscribeToForm();
    this.patchForm();
  }

  // Expose this method on the view for Use Previous Data.
  public async usePreviousData(): Promise<void> {
    const similarInspection = await this._dyePenService.searchPreviousData('Dye Penetrant Inspection');

    if (!similarInspection) {
      this._toastService.presentToast('No Previous data.', 'warning');
    }
    this.form.patchValue({...similarInspection});
  }
  //

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
      MATERIAL: new FormControl(null, {
        validators: [Validators.required]
      }),
      SURFACE_CONDITION: new FormControl(null, {
        validators: [Validators.required]
      }),
      MATERIAL_CONDITION: new FormControl(null, {
        validators: [Validators.required]
      }),
      SURFACE_TEMPERATURE: new FormControl(null, {
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
      { ...this._dyePenService.returnTemplateDataObject() }
    );
  }

  private sendFormDataToService(formData: FormData): void {
    this._dyePenService.updateTemplateDataObject(formData);
  }

}
