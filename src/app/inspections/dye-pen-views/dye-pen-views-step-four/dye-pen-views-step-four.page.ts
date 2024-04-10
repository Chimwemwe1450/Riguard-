import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ToastService } from 'src/app/shared/services/toast.service';
import { DyePenService } from '../dye-pen.service';

@Component({
  selector: 'app-dye-pen-views-step-four',
  templateUrl: './dye-pen-views-step-four.page.html',
  styleUrls: ['./dye-pen-views-step-four.page.scss'],
})
export class DyePenViewsStepFourPage implements OnInit {

  public heading = this._dyePenService.getInspectionHeading();
  public step = 4;
  public stepCount = this._dyePenService.stepCount;
  public stepDescription = 'Consumables';
  public form: FormGroup;
  public validForm = false;
  public navigateNext = false;

  constructor(
    private _dyePenService: DyePenService,
    private _toastService: ToastService
  ) { }

  ngOnInit() {
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

  private createForm() {
    this.form = new FormGroup({
      TYPE_01: new FormControl(null, {
        validators: [Validators.required]
      }),
      BRAND_01: new FormControl(null, {
        validators: [Validators.required]
      }),
      BATCH_01: new FormControl(null, {
        validators: [Validators.required]
      }),
      TYPE_02: new FormControl(null, {
        validators: [Validators.required]
      }),
      BRAND_02: new FormControl(null, {
        validators: [Validators.required]
      }),
      BATCH_02: new FormControl(null, {
        validators: [Validators.required]
      }),
      TYPE_03: new FormControl(null, {
        validators: [Validators.required]
      }),
      BRAND_03: new FormControl(null, {
        validators: [Validators.required]
      }),
      BATCH_03: new FormControl(null, {
        validators: [Validators.required]
      }),
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
