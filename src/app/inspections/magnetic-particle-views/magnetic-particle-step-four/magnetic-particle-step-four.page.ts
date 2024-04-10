import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ToastService } from 'src/app/shared/services/toast.service';
import { MagneticParticleService } from '../magnetic-particle.service';

@Component({
  selector: 'app-magnetic-particle-step-four',
  templateUrl: './magnetic-particle-step-four.page.html',
  styleUrls: ['./magnetic-particle-step-four.page.scss'],
})
export class MagneticParticleStepFourPage implements OnInit {

  public heading = this._magneticParticleService.getInspectionHeading();
  public step = 4;
  public stepCount = this._magneticParticleService.stepCount;
  public stepDescription = 'Consumables';
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
      TYPE_04: new FormControl(null, {
        validators: [Validators.required]
      }),
      BRAND_04: new FormControl(null, {
        validators: [Validators.required]
      }),
      BATCH_04: new FormControl(null, {
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
