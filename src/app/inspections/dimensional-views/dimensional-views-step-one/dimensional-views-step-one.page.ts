import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { InspectionsListService } from '../../inspections-list/inspections-list.service';
import { DimensionalService } from '../dimesional.service';
import { ToastService } from 'src/app/shared/services/toast.service';

import { Dimensional } from '../dimensional.model';

interface IDimensionalType {
  image: string;
  range: number;
  riser: string;
  microSn2: boolean;
  gauge:
  {
    enabled: boolean;
    count: number;
  };
}

@Component({
  selector: 'app-dimensional-views-step-one',
  templateUrl: './dimensional-views-step-one.page.html',
  styleUrls: ['./dimensional-views-step-one.page.scss'],
})
export class DimensionalViewsStepOnePage implements OnInit {

  public heading = this._dimensionalService.getInspectionHeading();
  public form: FormGroup;
  public rows: FormArray;
  public validForm = false;
  public navigateNext = false;

  public dimensionalType: IDimensionalType = {
    image: '',
    range: 1,
    riser: '',
    microSn2: false,
    gauge: {
      enabled: false,
      count: 0
    }
  };
  public alphabet = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J');

  constructor(
    private _dimensionalService: DimensionalService,
    private _inspectionsListService: InspectionsListService,
    private fb: FormBuilder,
    private _toastService: ToastService
  ) { }

  ngOnInit() {
    this.setInspectionImage();
    this.createForm();
    this.subscribeToForm();
    this.patchForm();
  }

  public async usePreviousData(): Promise<void> {
    const similarInspection = await this._dimensionalService.searchPreviousData('Dimensional');

    if (!similarInspection) {
      this._toastService.presentToast('No Previous data.', 'warning');
    }
    this.form.patchValue({...similarInspection});
  }

  public navigateToNext(event): void {
    this.navigateNext = event;
  }

  private createForm() {
    this.rows = this.fb.array([]);
    this.form = new FormGroup({
      ranges: this.rows,
      DATUM: new FormControl(null, {
        validators: [Validators.required]
      }),
      MEASUREMENT_POINT: new FormControl('2', {
        validators: [Validators.required]
      }),
      MICROMETER_1: new FormControl(null, {
        validators: [Validators.required]
      }),
      MICROMETER_2: new FormControl({value: null, disabled: true}),
      GAUGE_SERIAL_NUMBER: new FormControl({value: null, disabled: true}, {
        validators: [Validators.required]
      })
    });

    if (this.dimensionalType.gauge.enabled) {
      this.form.controls.GAUGE_SERIAL_NUMBER.enable();
    }
    if (this.dimensionalType.microSn2) {
      this.form.controls.MICROMETER_2.enable();
    }
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

  private patchForm(): void {
    const formData: Dimensional = this._dimensionalService.returnTemplateDataObject();

    if ('ranges' in formData) {
      const ranges = [...formData.ranges];

      this.form.patchValue(
        { ...formData }
      );

      let i = 0;
      while (i < this.dimensionalType.range) {
        const row = this.fb.group(ranges[i]);

        this.rows.push(row);
        i++;
      }

    } else {

      let i = 0;
      while (i < this.dimensionalType.range) {
        const row = this.fb.group({
          count: this.alphabet[i],
          deg0: [null, []],
          deg90: [null, []],
          deg120: [null, []],
          deg240: [null, []],
          selectInput: ['measured', []],
          visual: [null, []],
          gauge: [null, []],
          notApplicable: false
        });

        this.rows.push(row);
        i++;
      }
    }
  }

  private sendFormDataToService(formData: FormData): void {
    this._dimensionalService.updateTemplateDataObject(formData);
  }

  private setInspectionImage(): void {
    if (this._inspectionsListService.currentQcp) {
      const riser: string = this._inspectionsListService.currentQcp.riserModel.toUpperCase();
      const component: string = this._inspectionsListService.currentQcp.componentName;
      const subAssembly: string = this._inspectionsListService.currentQcp.subAssembly;
      // console.log('riser: ', riser);
      // console.log('subAssembly:' , subAssembly);
      // console.log('component: ', component);

      if (riser === 'CLIP') {
        this.dimensionalType.riser = 'CLIP';
        if (subAssembly === 'Main tube') {
          if (component ==='Pin Connector') {
            this.dimensionalType.image = '/assets/images/clip_main-tube_pin-connector.png';
            this.dimensionalType.range = 6;
          } else
          if (component === 'Box Connector') {
            this.dimensionalType.image = '/assets/images/clip_main-tube_box-connector.png';
            this.dimensionalType.range = 3;
          } else
          if (component === 'Locking Ring') {
            this.dimensionalType.image = '/assets/images/clip_main-tube_locking-ring.png';
            this.dimensionalType.range = 3;
            this.dimensionalType.microSn2 = true;
          }
        } else {
          if (component === 'Dynamic Box') {
            this.dimensionalType.image = '/assets/images/clip_aux-line_dynamic-box.png';
            this.dimensionalType.range = 4;
          } else
          if (component === 'Dynamic Pin') {
            this.dimensionalType.image = '/assets/images/clip_aux-line_dynamic-pin.png';
            this.dimensionalType.range = 1;
          } else
          if (component === 'Static Box') {
            this.dimensionalType.image = '/assets/images/clip_aux-line_static-box.png';
            this.dimensionalType.range = 4;
          } else
          if (component === 'Static Pin') {
            this.dimensionalType.image = '/assets/images/clip_aux-line_static-pin.png';
            this.dimensionalType.range = 1;
          }
        }
      } else
      if (riser === 'MR6HSE') {
        this.dimensionalType.riser = 'MR6HSE';
        if (subAssembly === 'Main tube') {
          if (component ==='Pin Connector') {
            this.dimensionalType.image = '/assets/images/dog_main-tube_pin-connector.png';
            this.dimensionalType.range = 2;
            this.dimensionalType.gauge.enabled = true;
            this.dimensionalType.gauge.count = 2;
          } else
          if (component === 'Box Connector') {
            this.dimensionalType.image = '/assets/images/dog_main-tube_box-connector.png';
            this.dimensionalType.range = 2;
            this.dimensionalType.microSn2 = true;
          } else
          if (component === 'Dog Window') {
            this.dimensionalType.image = '/assets/images/dog_main-tube_dog-window.png';
            this.dimensionalType.range = 3;
            this.dimensionalType.microSn2 = true;
          }
        } else
        if (subAssembly === 'Dog Ring Kit') {
          if (component === 'Dog Segment') {
            this.dimensionalType.image = '/assets/images/dog_ring-kit_dog-segment.png';
            this.dimensionalType.range = 4;
            this.dimensionalType.gauge.enabled = true;
            this.dimensionalType.gauge.count = 2;
          } else
          if (component === 'Dog Wear Plate') {
            this.dimensionalType.image = '/assets/images/dog_ring-kit_dog-wear-plate.png';
            this.dimensionalType.range = 1;
          }
        } else
        if (subAssembly === 'Cam Ring') {
          if (component === 'Cam Ring') {
            this.dimensionalType.image = '/assets/images/dog_cam-ring_cam-ring.png';
            this.dimensionalType.range = 3;
            this.dimensionalType.gauge.enabled = true;
            this.dimensionalType.gauge.count = 3;
          }
        } else
        if (
            (subAssembly === 'Choke line') ||
            (subAssembly === 'Kill line') ||
            (subAssembly === 'Booster line') ||
            (subAssembly === 'Hydraulic line #1') ||
            (subAssembly === 'Hydraulic line #2')
          ) {
          if (component === 'Box Connector') {
            this.dimensionalType.image = '/assets/images/dog_aux-lines_box-connector.png';
            this.dimensionalType.range = 4;
            this.dimensionalType.microSn2 = true;
          } else
          if (component === 'Pin Connector') {
            this.dimensionalType.image = '/assets/images/dog_aux-lines_pin-connector.png';
            this.dimensionalType.range = 1;
          }
        }
      } else {
        this.dimensionalType.riser = 'FLANGE';
        if (subAssembly === 'Main tube') {
          if (component ==='Pin Connector') {
            this.dimensionalType.image = '/assets/images/flange_main-tube_pin-connector.png';
            this.dimensionalType.range = 1;
          } else
          if (component === 'Box Connector') {
            this.dimensionalType.image = '/assets/images/flange_main-tube_box-connector.png';
            this.dimensionalType.range = 1;
          } else
          if (component === 'Seal Sub') {
            this.dimensionalType.image = '/assets/images/flange_main-tube_seal-sub.png';
            this.dimensionalType.range = 8;
            this.dimensionalType.microSn2 = true;
          }
        } else {
          if (component === 'Pin Connector') {
            this.dimensionalType.image = '/assets/images/flange_auxline_pin-connector.png';
            this.dimensionalType.range = 1;
          } else
          if (component === 'Box Connector') {
            this.dimensionalType.image = '/assets/images/flange_auxline_box-connector.png';
            this.dimensionalType.range = 4;
          } else
          if (component === 'Replaceable Pin') {
            this.dimensionalType.image = '/assets/images/flange_auxline_replaceable-pin.png';
            this.dimensionalType.range = 2;
          } else
          if (component === 'Intermediate Box') {
            this.dimensionalType.image = '/assets/images/flange_auxline_intermediate-box.png';
            this.dimensionalType.range = 2;
          }
        }
      }
    }
  }

}
