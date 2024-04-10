import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { InspectionsListService } from '../../inspections-list/inspections-list.service';
import { MagneticParticleService } from '../magnetic-particle.service';

@Component({
  selector: 'app-magnetic-particle-step-six',
  templateUrl: './magnetic-particle-step-six.page.html',
  styleUrls: ['./magnetic-particle-step-six.page.scss'],
})
export class MagneticParticleStepSixPage implements OnInit {

  public heading = this._magneticParticleService.getInspectionHeading();
  public step = 6;
  public stepCount = this._magneticParticleService.stepCount;
  public stepDescription = 'Inspection Result';
  public form: FormGroup;
  public validForm = false;
  public navigateNext = false;
  public critProcedure = {ac: 'n/a', rp: 'n/a'};

  constructor(
    private _magneticParticleService: MagneticParticleService,
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
      { ...this._magneticParticleService.returnTemplateDataObject() }
    );
  }

  private sendFormDataToService(formData: FormData): void {
    this._magneticParticleService.updateTemplateDataObject(formData);
  }

}
