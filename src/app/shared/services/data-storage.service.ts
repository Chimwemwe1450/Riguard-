import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';
import { BehaviorSubject, Observable } from 'rxjs';
import { QcpList } from '../models/qcp-list';
import { AuthService } from './auth.service';

import { StoredInspectionData } from '../models/stored-inspection-data.model';

class PageHeading {
  heading: string;
  projectName: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  private _storage: Storage | null = null;

  public retrievedInspection: StoredInspectionData = undefined;
  private retrievedInspectionSubject: BehaviorSubject<any> = new BehaviorSubject<any>(this.retrievedInspection);
  public $retrievedInspection: Observable<any> = this.retrievedInspectionSubject.asObservable();

  constructor(
    private storage: Storage,
    private _authService: AuthService
  ) {
    // this.init();
   }

  public async init(): Promise<void> {
    const storage: Storage = await this.storage.create();
    this._storage = storage;

    // this.getCount();
  }

  // Create and expose methods that users of this service can call.
  public async writeQcpListData(data: Array<QcpList>): Promise<boolean> {
    const userId = this._authService.getUserId();

    return await this.set(data, userId)
      .then(() => true)
      .catch(() => false);
  }

  public async readQcpListData(project?: string): Promise<QcpList> {
    const userId = this._authService.getUserId();
    const allQcps: QcpList = await this.get(userId);

    const filteredQcps = new QcpList();
    let index = 0;

    if (project) {
      for (const item in allQcps) {
        if (allQcps[item].projectName.startsWith(project)) {
          filteredQcps[index] = allQcps[item];
          ++index;
        }
      }
    } else {
      return allQcps;
    }

    return filteredQcps;
  }

  public async deleteQcp(cqmId: string): Promise<void> {
    const userId = this._authService.getUserId();
    const currentQcps = this.convertObjToArray(await this.get(userId));
    const index = currentQcps.findIndex(i => i.cqmId === cqmId);

    if (index < 0) {
      return;
    }
    currentQcps.splice(index, 1);

    await this.writeQcpListData(currentQcps);
  }

  public async writeInspectionData<T>(data: T, qcp: QcpList, currentStep: number, type: string): Promise<boolean> {
    const inspection: StoredInspectionData = new StoredInspectionData();
    inspection.data = data;
    inspection.id = qcp.cqmId;
    inspection.type = type;
    inspection.timeStamp = new Date().toISOString();
    inspection.currentStep = currentStep;
    inspection.qcpData = qcp;

    return await this.set(inspection, qcp.cqmId)
      .then(() => true)
      .catch(() => false);
  }

  public async writePreviousData<T>(data: T, qcp: QcpList, type: string): Promise<boolean> {
    const inspection: StoredInspectionData = new StoredInspectionData();
    inspection.data = data;
    inspection.id = qcp.cqmId;
    inspection.type = type;
    inspection.timeStamp = new Date().toISOString();
    inspection.currentStep = 0;
    inspection.qcpData = qcp;

    return await this.set(inspection, type)
      .then(() => true)
      .catch(() => false);
  }

  public async retrieveAndRestoreInspectionData(cqmId: string): Promise<StoredInspectionData> {
    this.retrievedInspection = await this.get(cqmId);

    if (this.retrievedInspection !== null) {
      this.retrievedInspectionSubject.next(this.retrievedInspection.data);
    } else {
      this.retrievedInspectionSubject.next(undefined);
    }

    return this.retrievedInspection;
  }

  public async lookupInspectionData(cqmId: string): Promise<any> {
    this.retrievedInspection = await this.get(cqmId) || undefined;

    return this.retrievedInspection;
  }

  public async deleteInspection(cqmId: string): Promise<boolean> {
    return await this.delete(cqmId)
      .then(() => true)
      .catch(() => false);
  }

  public async searchCompletedInspections(user: string): Promise<Array<StoredInspectionData>> {
    const inspections: Array<StoredInspectionData> = [];
    // const inspection: StoredInspectionData = new StoredInspectionData();

    await this._storage.forEach((value: any, key: string) => {
      // console.log('key: ', key, 'value: ', value);

      switch (key) {
        case 'authToken':
          return;
        case 'user':
          return;
        case 'userId':
          return;
        case 'pageHeading':
          return;
        default:
          break;
      }

      if ('data' in value) {
        if (value['qcpData']['user'] === user) {
          if ('complete' in value.data && value.data['complete']) {
            if(value['currentStep'] !== 0) {
              const inspection: StoredInspectionData = new StoredInspectionData();

              inspection.id = key;
              inspection.data = value.data;
              inspection.qcpData = value.qcpData;
              console.log('COUNT: ', );
              inspections.push(inspection);
            }
          }
        }
      }
    });
    return inspections;
  }

  public async searchSimilarInspections(type: string, projectId: string): Promise<StoredInspectionData> {
    const inspection: StoredInspectionData = await this._storage.get(type);

    if (inspection === null) {
      return null;
    }
    return inspection.qcpData.projectId === projectId ? inspection : null;
  }

  public async writeSyncStats<T>(data: T, key: string): Promise<boolean> {
    const userId = this._authService.getUserId();

    return await this.set(data, key + userId)
      .then(() => true)
      .catch(() => false);
  }

  public async retrieveSyncData<T>(key: string): Promise<T> {
    const userId = this._authService.getUserId();

    return await this.get(key + userId);
  }

  public async writeHeading(heading: string, projectName: string): Promise<boolean> {
    const data: PageHeading = {
      heading,
      projectName
    };

    return await this.set(data, 'pageHeading')
      .then(() => true)
      .catch(() => false);
  }

  public async retrieveHeading(): Promise<PageHeading> {
    const init = await this.get<PageHeading>('pageHeading');
    const value = await this.get<PageHeading>('pageHeading');

    return value || { heading: 'n/a', projectName: 'n/a' };
  }

  // Testing method for clearing storage.
  public async clearAllStorage(): Promise<void> {
    await this._storage.clear();
  }




  private async set<T>(data: T, id: string): Promise<any> {
    console.log('generic SET id: ', id);
    if (typeof data === 'string') {
      console.log('generic set STRING: ', data);
      return await this._storage.set(id, data);
    }
    return await this._storage.set(id, {...data});
  }

  private async get<T>(id: string): Promise<T> {
    console.log('generic GET ID: ', id);
    return await this._storage.get(id);
  }

  private async delete(id: string): Promise<any> {
    console.log('generic DELETE id: ', id);
    return await this._storage.remove(id);
  }



  private convertObjToArray(data: QcpList): Array<QcpList> {
    const qcpArray: Array<QcpList> = [];

    for (const item in data) {
      qcpArray.push(data[item]);
    }

    return qcpArray;
  }

}
