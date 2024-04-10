import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ToastService } from 'src/app/shared/services/toast.service';
import { EddyService } from '../eddy.service';

@Component({
  selector: 'app-eddy-views-step-two',
  templateUrl: './eddy-views-step-two.page.html',
  styleUrls: ['./eddy-views-step-two.page.scss'],
})
export class EddyViewsStepTwoPage implements OnInit {

  public heading = this._eddyService.getInspectionHeading();
  public step = 2;
  public stepCount = this._eddyService.stepCount;
  public stepDescription = 'Equipment Details';
  public form: FormGroup;
  public validForm = false;
  public navigateNext = false;

  constructor(
    private _eddyService: EddyService,
    private _toastService: ToastService
  ) { }

  ngOnInit() {
    this.createForm();
    this.subscribeToForm();
    this.patchForm();
  }

  public async usePreviousData(): Promise<void> {
    const similarInspection = await this._eddyService.searchPreviousData('Eddy Current');

    if (!similarInspection) {
      this._toastService.presentToast('No Previous data.', 'warning');
    }
    this.form.patchValue({...similarInspection});
  }

  public navigateToNext(event): void {
    this.navigateNext = event;
  }

  private createForm() {
    this.form = new FormGroup({
      UNIT_MAKE: new FormControl(null, {
        validators: [Validators.required]
      }),
      UNIT_SERIAL_NUMBER: new FormControl(null, {
        validators: [Validators.required]
      }),
      PROBE_TYPE: new FormControl(null, {
        validators: [Validators.required]
      }),
      PROBE_SERIAL_NUMBER: new FormControl(null, {
        validators: [Validators.required]
      }),
      REF_BLOCK_DESCRIPTION: new FormControl(null, {
        validators: [Validators.required]
      }),
      REF_BLOCK_SERIAL_NUMBER: new FormControl(null, {
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
      { ...this._eddyService.returnTemplateDataObject() }
    );
  }

  private sendFormDataToService(formData: FormData): void {
    this._eddyService.updateTemplateDataObject(formData);
  }

}
