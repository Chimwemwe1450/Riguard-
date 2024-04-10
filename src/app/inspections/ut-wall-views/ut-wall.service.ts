import { Injectable } from '@angular/core';

import { NavController } from '@ionic/angular';

import { Subscription } from 'rxjs';

import { DataStorageService } from 'src/app/shared/services/data-storage.service';
import { InspectionsListService } from '../inspections-list/inspections-list.service';
import { EntityPostingDataProcessorService } from '../shared/services/entity-posting-data-processor.service';

import { ReadingLabels } from './reading-labels.interface';

import { UtWall } from './ut-wall.model';

@Injectable({
  providedIn: 'root'
})
export class UtWallService {

  private data: UtWall = new UtWall();
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

    return await this._dataProcessor.dataProcessor(this.data, cqmId, riserModel, 'UT Wall Thickness')
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
      'UT Wall Thickness'
    )
      .then(res => {
        return res;
      })
      .catch(error => {
        return error;
      });
  }

  public async storePreviousData(): Promise<void> {
    await this._dataStorage.writePreviousData(
      this.data,
      this._inspectionsListService.currentQcp,
      'UT Wall Thickness'
    );
  }

  public updateTemplateDataObject(formData: FormData): void {

     for (const label in formData) {
       this.data[label] = formData[label];
     }
     console.log('updateTemplateDataObject: ', this.data);
  }

  public returnTemplateDataObject(): UtWall {
    return this.data;
  }

  public setData(data: UtWall): void {
    this.data = data;
  }

  public getInspectionHeading(): string {
    const currentQcp = this._inspectionsListService.currentQcp;

    return currentQcp
        ? `${currentQcp.riserTag} ${currentQcp.subAssembly} ${currentQcp.componentName} ${currentQcp.recordName}`
        : 'qcp not available';
  }

  public async searchPreviousData(type: string): Promise<UtWall> {
    const inspection = await this._dataStorage.searchSimilarInspections(type, this._inspectionsListService.currentQcp.projectId);

    if (inspection === null) {
      return undefined;
    }

    return inspection.data;
  }

  public screenNavigation(routeDirections: string, route: number) {
    switch (routeDirections) {
      case 'next':
        this.navCtrl.navigateForward(`inspections/ut-wall/${route + 1}`);
        break;
      case 'previous':
        this.navCtrl.navigateBack(`inspections/ut-wall/${route - 1}`);
        break;
      case 'exit':
        this.navCtrl.navigateRoot('inspections');
    }
  }

  /* public generateInputArray(total: number, inputsSet: Array<string>): Array<string> {
    let count = 0;
    const newArr: Array<string> = [];
    do {
      for (const input of inputsSet) {
        newArr.push(count + input);
      }
      count ++;

    } while (count <= total);

    return newArr;
  } */

  public calculateAverageData(): Array<string> {
    let combinedReadings = [];

    combinedReadings = [
        ...this.extractValues(this.data.readingA),
        ...this.extractValues(this.data.readingB),
        ...this.extractValues(this.data.readingC),
        ...this.extractValues(this.data.readingD)
    ];

    const min = Math.min(...combinedReadings).toFixed(1);
    const max = Math.max(...combinedReadings).toFixed(1);
    const average = combinedReadings.reduce((acc, current) => acc + current) / combinedReadings.length;
    const av = average.toFixed(1);

    return [min, max, av];
  }


  private extractValues(data: Array<ReadingLabels>): Array<number> {
    const readings: Array<number> = [];

    for (const i of data) {

      for (const prop in i) {
        if (i[prop] !== null && prop !== 'feet') {
          readings.push(+i[prop]);
        }
      }
    }
    return readings;
  }

  private subscribeToRetrievedInspection() {
    this._dataStorage.$retrievedInspection.subscribe(data => {
      this.data = data || new UtWall();
    });
  }

}
