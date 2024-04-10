import { Injectable } from '@angular/core';

import { NavController } from '@ionic/angular';

import { Subscription } from 'rxjs';

import { InspectionsListService } from '../inspections-list/inspections-list.service';
import { DataStorageService } from 'src/app/shared/services/data-storage.service';
import { EntityPostingDataProcessorService } from '../shared/services/entity-posting-data-processor.service';

import { PostInspection } from './post-inspection.model';
import { StoredInspectionData } from 'src/app/shared/models/stored-inspection-data.model';

@Injectable({
  providedIn: 'root'
})
export class PostInspectionService {

  // public qcpData;
  private data: PostInspection = new PostInspection();

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

    return await this._dataProcessor.dataProcessor(this.data, cqmId, riserModel, 'Post_Inspection')
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
      'Post_Inspection'
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
      'Post_Inspection'
    );
  }

  public updateTemplateDataObject(formData: FormData): void {

    for (const label in formData) {
      this.data[label] = formData[label];
    }
    console.log('updateTemplateDataObject: ', this.data);
  }

  public returnTemplateDataObject(): PostInspection {
    return this.data;
  }

  public setData(data: PostInspection): void {
    this.data = data;
  }

  public getInspectionHeading(): string {
    const currentQcp = this._inspectionsListService.currentQcp;

    return currentQcp
        ? `${currentQcp.riserTag} ${currentQcp.subAssembly} ${currentQcp.componentName} ${currentQcp.recordName}`
        : 'qcp not available';
  }

  public async searchPreviousData(type: string): Promise<PostInspection> {
    const inspection = await this._dataStorage.searchSimilarInspections(type, this._inspectionsListService.currentQcp.projectId);

    if (inspection === null) {
      return undefined;
    }

    return inspection.data;
  }

  public screenNavigation(routeDirections: string, route: number) {
    switch (routeDirections) {
      case 'next':
        this.navCtrl.navigateForward(`inspections/post-inspection/${route + 1}`);
        break;
      case 'previous':
        this.navCtrl.navigateBack(`inspections/post-inspection/${route - 1}`);
        break;
      case 'exit':
        this.navCtrl.navigateRoot('inspections');
    }
  }



  private subscribeToRetrievedInspection() {
    this._dataStorage.$retrievedInspection.subscribe(data => {
      this.data = data || new PostInspection();
    });
  }
}
