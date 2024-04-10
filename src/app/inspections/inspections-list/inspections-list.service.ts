import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { DataStorageService } from 'src/app/shared/services/data-storage.service';
import { AuthService } from 'src/app/shared/services/auth.service';

import { QcpList } from 'src/app/shared/models/qcp-list';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InspectionsListService {

  public qcps: Array<QcpList> = [];
  private qcpsSubject: BehaviorSubject<Array<QcpList>> = new BehaviorSubject<Array<QcpList>>(this.qcps);
  public $qcps: Observable<Array<QcpList>> = this.qcpsSubject.asObservable();

  public currentQcp: QcpList;

  private apiBaseUrl = `${environment.baseUrl}component-qcp-mappings/my-inspection?`;


  constructor(
    private http: HttpClient,
    private _dataStorage: DataStorageService,
    private _authService: AuthService
  ) { }

  public getQcpList(userId: string): Observable<any> {
    return this.http.get<any>(
      `${this.apiBaseUrl}userId=${userId}&projectNumber=`
    );
  }

  public removeQcp(): void {
    const qcps: Array<QcpList> = this.qcps;
    const indx = qcps.findIndex(i => i.cqmId === this.currentQcp.cqmId);

    qcps.splice(indx, 1);

    this.sendToSubscribers(qcps);
    this.storeQcps(qcps);
  }

  public retrieveQcps(project?: string): void {
    this._dataStorage.readQcpListData(project)
    .then(res => {
      this.convertQcpsObjToArray(res);
    })
    .catch(error =>
      console.log('retrieval error: ', error)
    );
  }

  public convertQcpsObjToArray(data: QcpList): void {
    const qcpArray: Array<QcpList> = [];

    for (const item in data) {
      qcpArray.push(data[item]);
    }
    this.buildAndSetPageHeading(qcpArray[0]);
    this.sendToSubscribers(qcpArray);
  }

  public async buildQcpListData(data: any): Promise<void> {
    const qcps: Array<QcpList> = [];

    if (data['data'].length) {

      for (const item of data['data']) {
        const qcpListItem: QcpList = {
          id: item['qcp']['id'].toString(),
          cqmId: item['cqmId'].toString(),
          projectId: item['qcp']['scope']['project']['id'].toString(),
          name: item['qcp']['recordName'],
          componentName: item['qcp']['components']['componentName'],
          componentDescription: item['qcp']['components']['componentDescription'],
          recordName: item['qcp']['record']['recordName'],
          recordDescription: item['qcp']['record']['recordDescription'],
          riserTag: item['riserTag'],
          riserModel: item['riserModel'],
          subAssembly: item['qcp']['subAssembly']['subAssemblyName'],
          acceptanceCriteria: item['qcp']['acceptanceCriteria'],
          referenceProcedure: item['qcp']['referenceProcedure'],
          manualReport: item['qcp']['manualReport'],
          clientName: item['qcp']['scope']['project']['rig']['client']['clientName'],
          rigName: item['qcp']['scope']['project']['rig']['rigName'],
          projectName: item['qcp']['scope']['project']['projectNumber'],
          user: this._authService.getUser().name

        };
        qcps.push(qcpListItem);
      };
      this.buildAndSetPageHeading(qcps[0]);
    }
    this.sendToSubscribers(qcps);
    this.storeQcps(qcps);
  }

  public sendFilteredQcps(qcps: Array<QcpList>): void {
    this.qcpsSubject.next(qcps);
  }

  public async buildAndSetPageHeading(data: QcpList): Promise<void> {
    if (!data) {
      return;
    }
    const firstName = this._authService.getUser();
    const clientName = data.clientName;
    const rigName = data.rigName;
    const projectName = data.projectName;

    const heading = `${firstName.name}'s Inspections > ${clientName} > ${rigName} > ${projectName}`;

    await this._dataStorage.writeHeading(heading, projectName);
  }



  private async storeQcps(QcpData: Array<QcpList>): Promise<boolean> {
    return this._dataStorage.writeQcpListData(QcpData);
  }

  private sendToSubscribers(qcps: Array<QcpList>): void {
    this.qcps = qcps;
    this.qcpsSubject.next(this.qcps);
  }

  /* private trimQcpCount(qcps: Array<QcpList>): Array<QcpList> {
    const trimmed = qcps.slice(0, 150);

    return trimmed;
  } */

}
