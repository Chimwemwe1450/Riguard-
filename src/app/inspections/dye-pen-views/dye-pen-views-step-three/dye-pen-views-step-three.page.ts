import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ToastService } from 'src/app/shared/services/toast.service';
import { DyePenService } from '../dye-pen.service';

@Component({
  selector: 'app-dye-pen-views-step-three',
  templateUrl: './dye-pen-views-step-three.page.html',
  styleUrls: ['./dye-pen-views-step-three.page.scss'],
})
export class DyePenViewsStepThreePage implements OnInit {

  public heading = this._dyePenService.getInspectionHeading();
  public step = 3;
  public stepCount = this._dyePenService.stepCount;
  public stepDescription = 'Equipment & Environment';
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
      LIGHT_LUX: new FormControl(null, {
        validators: [Validators.required]
      }),
      LIGHT_LUX_SERIAL_NUMBER: new FormControl(null, {
        validators: [Validators.required]
      }),
      UV: new FormControl(null, {
        validators: [Validators.required]
      }),
      UV_SERIAL_NUMBER: new FormControl(null, {
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
