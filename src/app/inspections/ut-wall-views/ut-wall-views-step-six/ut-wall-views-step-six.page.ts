import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { UtWallService } from '../ut-wall.service';

@Component({
  selector: 'app-ut-wall-views-step-six',
  templateUrl: './ut-wall-views-step-six.page.html',
  styleUrls: ['./ut-wall-views-step-six.page.scss'],
})
export class UtWallViewsStepSixPage implements OnInit {

  public heading = this._utWallService.getInspectionHeading();
  public step = 6;
  public stepCount = this._utWallService.stepCount;
  public stepDescription = 'Inspection Results';
  public form: FormGroup;
  public validForm = false;
  public navigateNext = false;

  constructor(
    private _utWallService: UtWallService
  ) { }

  ngOnInit() {
    this.createForm();
    this.subscribeToForm();
    this.patchForm();
    this.getAverageData();

    this.form.patchValue({complete: false});
  }

  public navigateToNext(event): void {
    this.navigateNext = event;
  }

  private createForm() {
    this.form = new FormGroup({
      COMPONENT_TRACEABILITY: new FormControl(null, {
        validators: [Validators.required]
      }),
      CONSUM_TYPE: new FormControl(null, {
        validators: [Validators.required]
      }),
      CONSUM_BRAND: new FormControl(null, {
        validators: [Validators.required]
      }),
      CONSUM_BATCH: new FormControl(null, {
        validators: [Validators.required]
      }),
      INSPECTION_STATUS: new FormControl(null, {
        validators: [Validators.required]
      }),
      NOTES: new FormControl(''),
      AVERAGE_MIN: new FormControl(null),
      AVERAGE_MAX: new FormControl(null),
      AVERAGE_AVERAGE: new FormControl(null),
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
      { ...this._utWallService.returnTemplateDataObject() }
    );
  }

  private sendFormDataToService(formData: FormData): void {
    this._utWallService.updateTemplateDataObject(formData);
  }

  private getAverageData(): void {
    const averageData = this._utWallService.calculateAverageData();

    this.form.patchValue({
      AVERAGE_MIN: averageData[0],
      AVERAGE_MAX: averageData[1],
      AVERAGE_AVERAGE: averageData[2]
    });
  }

}
