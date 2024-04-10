import { Injectable } from '@angular/core';

import { InspectionsListService } from '../../inspections-list/inspections-list.service';

import { QcpList } from 'src/app/shared/models/qcp-list';
import { FilterParams } from 'src/app/shared/models/filter-params.model';

class SelectedParams {
  riserTag = [];
  subAssembly = [];
  component = [];
  recordType = [];
};

@Injectable({
  providedIn: 'root'
})
export class FilteringService {

  public params: FilterParams = new FilterParams();
  public selectedParams = new SelectedParams();
  private data: Array<QcpList>;
  private filteredData: Array<QcpList> = [];

  constructor(
    private _inspectionsListService: InspectionsListService
  ) {}

  public filter(qcpList?: Array<QcpList>): void {
    this.filteredData = [];
    this.buildSelectedParams();

    for (const qcp of qcpList || this.data) {
      if (
          (!this.selectedParams['riserTag'].length ? true : this.selectedParams.riserTag.includes(qcp.riserTag)) &&
          (!this.selectedParams['subAssembly'].length ? true : this.selectedParams.subAssembly.includes(qcp.subAssembly)) &&
          (!this.selectedParams['component'].length ? true : this.selectedParams.component.includes(qcp.componentName)) &&
          (!this.selectedParams['recordType'].length ? true : this.selectedParams.recordType.includes(qcp.recordName))
        ) {
            this.filteredData.push(qcp);
          };
    }
    this._inspectionsListService.sendFilteredQcps(this.filteredData);
  }

  public getParams(): FilterParams {
    return this.buildParams();
  }

  private buildParams(): FilterParams {
    this.data = this._inspectionsListService.qcps;

    const componentNames: Array<{value: string; checked: boolean}> = [];
    const recordNames: Array<{value: string; checked: boolean}> = [];
    const riserTags: Array<{value: string; checked: boolean}> = [];
    const subAssemblys: Array<{value: string; checked: boolean}> = [];

    for (const item of this.data) {
      if (componentNames.findIndex(i => i.value === item.componentName) < 0) {
        componentNames.push({value: item.componentName, checked: false});
      }
      if (recordNames.findIndex(i => i.value === item.recordName) < 0) {
        recordNames.push({value: item.recordName, checked: false});
      }
      if (riserTags.findIndex(i => i.value === item.riserTag) < 0) {
        riserTags.push({value: item.riserTag, checked: false});
      }
      if (subAssemblys.findIndex(i => i.value === item.subAssembly) < 0) {
        subAssemblys.push({value: item.subAssembly, checked: false});
      }
    }

    this.params.component = componentNames;
    this.params.recordType = recordNames;
    this.params.riserTag = riserTags;
    this.params.subAssembly = subAssemblys;

    // Restore any checked properties in this.params //
    for (const paramName in this.params) {
      for (const item of this.params[paramName]) {
        if (this.selectedParams[paramName].findIndex(j => j === item.value) >= 0) {
          item.checked = true;
        }
      }
    }

    return this.params;
  }

  private buildSelectedParams(): void {
    for (const item in this.params) {
      if (Object.hasOwnProperty.call(this.params, item)) {
        this.selectedParams[item] = [];

        for (const value of this.params[item]) {
          if (value.checked === true) {
            this.selectedParams[item].push(value.value);
          }
        }
      }
    }
  }

  public clear(): void {
    // Clear selectedParams.
    this.selectedParams = new SelectedParams();

    // Clear physical checkboxes.
    for (const item in this.params) {
      if (Object.hasOwnProperty.call(this.params, item)) {

        for (const value of this.params[item]) {
          value.checked ? value.checked = false : value.checked;
        }
      }
    }
  }


  private isEmpty(obj): boolean {
    for(const prop in obj) {
      if(obj.hasOwnProperty(prop)) {
        return false;
      }
    }
    return true;
  }

}
