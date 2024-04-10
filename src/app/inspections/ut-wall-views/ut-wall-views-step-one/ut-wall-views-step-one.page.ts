import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ToastService } from 'src/app/shared/services/toast.service';
import { InspectionsListService } from '../../inspections-list/inspections-list.service';
import { UtWallService } from '../ut-wall.service';

@Component({
  selector: 'app-ut-wall-views-step-one',
  templateUrl: './ut-wall-views-step-one.page.html',
  styleUrls: ['./ut-wall-views-step-one.page.scss'],
})
export class UtWallViewsStepOnePage implements OnInit {

  public currentDate = new Date().toLocaleDateString('en-GB', {year: 'numeric', month: 'long', day: 'numeric'});
  public heading = this._utWallService.getInspectionHeading();
  public step = 1;
  public stepCount = this._utWallService.stepCount;
  public stepDescription = 'Pre-Inspection Information';
  public form: FormGroup;
  public validForm = false;
  public navigateNext = false;
  public critProcedure = {ac: 'n/a', rp: 'n/a'};

  constructor(
    private _utWallService: UtWallService,
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
    const similarInspection = await this._utWallService.searchPreviousData('UT Wall Thickness');

    console.log('similarInspection: ', similarInspection);
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
      }),
      PROBE_SERIAL_NUMBER: new FormControl(null, {
        validators: [Validators.required]
      }),
      PROBE_FREQUENCY: new FormControl(null, {
        validators: [Validators.required]
      }),
      PROBE_SIZE: new FormControl(null, {
        validators: [Validators.required]
      }),
      TEST_EQUIPMENT: new FormControl(null, {
        validators: [Validators.required]
      }),
      TEST_EQUIP_SERIAL_NUMBER: new FormControl(null, {
        validators: [Validators.required]
      }),
      CALIBERATED: new FormControl(this.currentDate, {
        validators: [Validators.required]
      }),
      MEASUREMENT_POINT: new FormControl(null, {
        validators: [Validators.required]
      }),
      DISTANCE_BETWEEN_READINGS: new FormControl(null, {
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
      { ...this._utWallService.returnTemplateDataObject() }
    );
  }

  private sendFormDataToService(formData: FormData): void {
    this._utWallService.updateTemplateDataObject(formData);
  }

}
