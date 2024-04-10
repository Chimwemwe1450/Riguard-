import { Injectable } from '@angular/core';

import { NavController } from '@ionic/angular';

import { InspectionsListService } from '../inspections-list/inspections-list.service';
import { EntityPostingService } from '../shared/services/entity-posting.service';

import { VisualDynamicPins } from './visual-dynamic-pins.model';

@Injectable({
  providedIn: 'root'
})
export class VisualDynamicPinsService {

  private data: VisualDynamicPins = new VisualDynamicPins();

  constructor(
    private navCtrl: NavController,
    private _entityPostingService: EntityPostingService,
    private _inspectionsListService: InspectionsListService
  ) { }

  public postInspectionData(): void {
    // this._entityPostingService.postData(this.data);
  }

  public updateTemplateDataObject(formData: FormData): void {

     for (const label in formData) {
       this.data[label] = formData[label];
     }
     console.log('updateTemplateDataObject: ', this.data);
  }

  public returnTemplateDataObject(): VisualDynamicPins {
    return this.data;
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
        this.navCtrl.navigateForward(`inspections/visual-dynamic/${route + 1}`);
        break;
      case 'previous':
        this.navCtrl.navigateBack(`inspections/visual-dynamic/${route - 1}`);
        break;
      case 'exit':
        this.navCtrl.navigateRoot('inspections');
    }
  }

}
