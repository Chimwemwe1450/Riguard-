import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ToastService } from 'src/app/shared/services/toast.service';
import { MagneticParticleService } from '../magnetic-particle.service';

@Component({
  selector: 'app-magnetic-particle-step-three',
  templateUrl: './magnetic-particle-step-three.page.html',
  styleUrls: ['./magnetic-particle-step-three.page.scss'],
})
export class MagneticParticleStepThreePage implements OnInit {

  public heading = this._magneticParticleService.getInspectionHeading();
  public step = 3;
  public stepCount = this._magneticParticleService.stepCount;
  public stepDescription = 'Equipment & Environment';
  public form: FormGroup;
  public validForm = false;
  public navigateNext = false;

  constructor(
    private _magneticParticleService: MagneticParticleService,
    private _toastService: ToastService
  ) { }

  ngOnInit() {
    this.createForm();
    this.subscribeToForm();
    this.patchForm();
  }

  public async usePreviousData(): Promise<void> {
    const similarInspection = await this._magneticParticleService.searchPreviousData('Magnetic Particle Inspection');

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
      FIELD_INDICATOR: new FormControl(null, {
        validators: [Validators.required]
      }),
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
      }),
      TEST_EQUIPMENT: new FormControl(null, {
        validators: [Validators.required]
      }),
      TEST_EQUIPMENT_SERIAL_NUMBER: new FormControl(null, {
        validators: [Validators.required]
      }),
      VERIFICATION_LIFT_TEST: new FormControl(null, {
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
      { ...this._magneticParticleService.returnTemplateDataObject() }
    );
  }

  private sendFormDataToService(formData: FormData): void {
    this._magneticParticleService.updateTemplateDataObject(formData);
  }

}
