import { Injectable } from '@angular/core';

import { NavController } from '@ionic/angular';

import { InspectionsListService } from '../inspections-list/inspections-list.service';
import { DataStorageService } from 'src/app/shared/services/data-storage.service';
import { PreInspection } from './pre-inspection.model';
import { EntityPostingDataProcessorService } from '../shared/services/entity-posting-data-processor.service';

@Injectable({
  providedIn: 'root'
})
export class PreInspectionService {

  private data: PreInspection = new PreInspection();
  public stepCount = 6;

  constructor(
    private navCtrl: NavController,
    private _inspectionsListService: InspectionsListService,
    private _dataStorage: DataStorageService,
    private _dataProcessor: EntityPostingDataProcessorService
  ) {
    this.subscribeToRetrievedInspection();
   }

  public async postInspectionData(): Promise<boolean> {
    const cqmId = this._inspectionsListService.currentQcp.cqmId;
    const riserModel = this._inspectionsListService.currentQcp.riserModel.toUpperCase();

    return await this._dataProcessor.dataProcessor(this.data, cqmId, riserModel, 'Pre_Inspection')
      .then((res) => res)
      .catch((error) => error);
  }

  public setFormAsComplete(): void {
    this.data.complete = true;
  }

  public async storeInspectionData(currentStep: number): Promise<boolean> {
    return await this._dataStorage.writeInspectionData(
      this.data,
      this._inspectionsListService.currentQcp,
      currentStep,
      'Pre_Inspection'
    )
      .then(res => {
        return res;
      })
      .catch(error => {
        return error;
      });
  }

  public updateTemplateDataObject(formData: FormData): void {

     for (const label in formData) {
       this.data[label] = formData[label];
     }
     console.log('updateTemplateDataObject: ', this.data);
  }

  public returnTemplateDataObject(): PreInspection {
    return this.data;
  }

  public setData(data: PreInspection): void {
    this.data = data;
  }

  public getInspectionHeading(): string {
    const currentQcp = this._inspectionsListService.currentQcp;

    return currentQcp
        ? `${currentQcp.riserTag} ${currentQcp.subAssembly} ${currentQcp.componentName} ${currentQcp.recordName}`
        : 'qcp not available';
  }

  public screenNavigation(routeDirections: string, route: number) {
    console.log('NAV emitted: ', routeDirections);
    switch (routeDirections) {
      case 'next':
        this.navCtrl.navigateForward(`inspections/pre-inspection/${route + 1}`);
        break;
      case 'previous':
        this.navCtrl.navigateBack(`inspections/pre-inspection/${route - 1}`);
        break;
      case 'exit':
        this.navCtrl.navigateRoot('inspections');
    }
  }

  private subscribeToRetrievedInspection() {
    this._dataStorage.$retrievedInspection.subscribe(data => {
      this.data = data || new PreInspection();
    });
  }
}
