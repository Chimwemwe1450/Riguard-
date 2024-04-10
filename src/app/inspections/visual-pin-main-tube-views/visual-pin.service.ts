import { Injectable } from '@angular/core';

import { NavController } from '@ionic/angular';

import { InspectionsListService } from '../inspections-list/inspections-list.service';
import { DataStorageService } from 'src/app/shared/services/data-storage.service';
import { VisualPin } from './visual-pin.model';
import { EntityPostingDataProcessorService } from '../shared/services/entity-posting-data-processor.service';

@Injectable({
  providedIn: 'root'
})
export class VisualPinService {

  private data: VisualPin = new VisualPin();
  public stepCount = 5;

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

    return await this._dataProcessor.dataProcessor(this.data, cqmId, riserModel, 'Visual Inspection')
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
      'Visual Inspection'
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

  public returnTemplateDataObject(): VisualPin {
    return this.data;
  }

  public setData(data: VisualPin): void {
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
        this.navCtrl.navigateForward(`inspections/visual-pin-main/${route + 1}`);
        break;
      case 'previous':
        this.navCtrl.navigateBack(`inspections/visual-pin-main/${route - 1}`);
        break;
      case 'exit':
        this.navCtrl.navigateRoot('inspections');
    }
  }



  private subscribeToRetrievedInspection() {
    this._dataStorage.$retrievedInspection.subscribe(data => {
      this.data = data || new VisualPin();
    });
  }

}
