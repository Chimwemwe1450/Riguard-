import { Component, OnInit } from '@angular/core';

import { UtWallService } from '../ut-wall.service';
import { ToastService } from 'src/app/shared/services/toast.service';

import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

import { UtWall } from '../ut-wall.model';
import { ReadingLabels } from '../reading-labels.interface';

@Component({
  selector: 'app-ut-wall-views-step-three',
  templateUrl: './ut-wall-views-step-three.page.html',
  styleUrls: ['./ut-wall-views-step-three.page.scss'],
})
export class UtWallViewsStepThreePage implements OnInit {

  public readingsInputs: Array<string> = [];
  public heading = this._utWallService.getInspectionHeading();
  public step = 3;
  public stepCount = this._utWallService.stepCount;
  public stepDescription = 'B Reading';
  public validForm = true;

  data: ReadingLabels[] = [];
  dataSource = new BehaviorSubject<AbstractControl[]>([]);
  public rows: FormArray;
  public form: FormGroup;

  private distanceOfReadings: number;

  constructor(
    private _utWallService: UtWallService,
    private fb: FormBuilder,
    private _toastService: ToastService
  ) { }

  ngOnInit() {
    // this.readingsInputs = this._utWallService.generateInputArray(75, ['0', '90', '180', '270', '45', '135', '225', '315']);
    this.createForm();
    this.subscribeToForm();
    this.patchForm();
  }

  public addRow(update?: boolean): void {
    const row = this.buildFormGroup();
    const currentDistance = +row.value['feet'];

    if (currentDistance > 75) {
      this._toastService.presentToast('Maximum distance reached.', 'warning');
    } else {
      this.rows.push(row);
    }

    /* if (update) {
      this.updateView();
    } */
  }

  /* private updateView(): void {
    this.dataSource.next(this.rows.controls);
  } */

  private createForm() {
    this.rows = this.fb.array([]);
    this.form = this.fb.group({ readingB: this.rows });
    // this.addRow();
  }

  public usePreviousData(): void {
    this.rows.clear();
    const formData: UtWall = this._utWallService.returnTemplateDataObject();

    formData.readingA.forEach((data) => {
      const row = this.buildFormGroup(data);
      this.rows.push(row);
    });
  }

  private subscribeToForm(): void {
    this.form.valueChanges.subscribe(() => {
      this.sendFormDataToService(this.form.value);

      this.validForm = this.validateFormArray(this.rows.value);
    });
  }

  private patchForm() {
    const formData: UtWall = this._utWallService.returnTemplateDataObject();
    this.distanceOfReadings = formData.DISTANCE_BETWEEN_READINGS;

    if (formData.readingB) {

      formData.readingB.forEach((data) => {
        const row = this.buildFormGroup(data);
        this.rows.push(row);
      });
    } else {
      const row = this.buildFormGroup();
      this.rows.push(row);
    }
  }

  private sendFormDataToService(formData: FormData): void {
    this._utWallService.updateTemplateDataObject(formData);
  }

  private buildFormGroup(formValues?: ReadingLabels): FormGroup {
    const calculateDistance: number = !this.rows.length ? this.rows.length : this.distanceOfReadings * this.rows.length;

    if (!formValues) {
      return this.fb.group({
        deg0: [null, []],
        deg90: [null, []],
        deg180: [null, []],
        deg270: [null, []],
        deg45: [null, []],
        deg135: [null, []],
        deg225: [null, []],
        deg315: [null, []],
        feet: [calculateDistance.toString(), []]
      });
    }

    formValues.feet = calculateDistance.toString();

    return this.fb.group({...formValues});
  }

  private validateFormArray(formArray: Array<AbstractControl>): boolean {
    let valid = false;

    for (const item of formArray) {
      for (const prop in item) {

        if ( (prop !== 'feet') && (item[prop] !== null) && (item[prop] !== '') ) {
          valid = true;
        }
      }
    }
    return valid;
  }

}
