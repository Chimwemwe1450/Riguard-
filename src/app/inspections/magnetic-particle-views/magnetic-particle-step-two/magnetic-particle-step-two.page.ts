import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ToastService } from 'src/app/shared/services/toast.service';
import { MagneticParticleService } from '../magnetic-particle.service';

@Component({
  selector: 'app-magnetic-particle-step-two',
  templateUrl: './magnetic-particle-step-two.page.html',
  styleUrls: ['./magnetic-particle-step-two.page.scss'],
})
export class MagneticParticleStepTwoPage implements OnInit {

  public heading = this._magneticParticleService.getInspectionHeading();
  public step = 2;
  public stepCount = this._magneticParticleService.stepCount;
  public stepDescription = 'Inspection Method';
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
      METHOD_1: new FormControl(null, {
        validators: [Validators.required]
      }),
      METHOD_2: new FormControl(null, {
        validators: [Validators.required]
      }),
      METHOD_3: new FormControl(null, {
        validators: [Validators.required]
      }),
      METHOD_4: new FormControl(null, {
        validators: [Validators.required]
      }),
      MAGNETISATION: new FormControl(null, {
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
