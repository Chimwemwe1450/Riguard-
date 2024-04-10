import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StoredInspectionData } from 'src/app/shared/models/stored-inspection-data.model';
import { DataStorageService } from 'src/app/shared/services/data-storage.service';

@Injectable({
  providedIn: 'root'
})
export class RoutePickerService {

  constructor(
    private router: Router,
    private _dataStorage: DataStorageService
  ) { }

  public navigate(route: string, cqmId: string): void {
    this._dataStorage.retrieveAndRestoreInspectionData(cqmId)
      .then(res => {
        this.router.navigate([this.routeBuilder(res, route)]);
      })
      .catch(error => {
        console.log('error retrieving: ', error);
      });
  }

  private routeBuilder(data: StoredInspectionData, route: string): string {
    const subRoute = data !== null ? data.currentStep : 1;

    return `inspections/${route}/${subRoute}`;
  }

}
