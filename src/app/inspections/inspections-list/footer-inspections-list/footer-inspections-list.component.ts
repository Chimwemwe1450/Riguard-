import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';

import { DataStorageService } from 'src/app/shared/services/data-storage.service';
import { ToastService } from 'src/app/shared/services/toast.service';
import { EntityPostingDataProcessorService } from '../../shared/services/entity-posting-data-processor.service';
import { SyncStatsService } from 'src/app/shared/services/sync-stats.service';
import { AuthService } from 'src/app/shared/services/auth.service';

import { QcpList } from 'src/app/shared/models/qcp-list';
import { SyncStatsData } from 'src/app/shared/models/sync-stats-data.model';
import { StoredInspectionData } from 'src/app/shared/models/stored-inspection-data.model';
import { SyncReportData } from 'src/app/shared/models/sync-report-data.model';

import { SyncReportComponent } from '../sync-report/sync-report.component';

import { ConnectionStatusHelper } from 'src/app/shared/classes/connection-status-helper';

@Component({
  selector: 'app-footer-inspections-list',
  templateUrl: './footer-inspections-list.component.html',
  styleUrls: ['./footer-inspections-list.component.scss'],
})
export class FooterInspectionsListComponent implements OnInit {

  public spinning = false;

  public syncStatsData: SyncStatsData;
  private syncReportData: Array<SyncReportData> = [];

  public connection = new ConnectionStatusHelper();

  constructor(
    private _toastService: ToastService,
    private modalController: ModalController,
    private _dataStorage: DataStorageService,
    private _dataProcessor: EntityPostingDataProcessorService,
    private _syncStatsService: SyncStatsService,
    private _authService: AuthService
  ) {
    this._syncStatsService.$syncStats.subscribe(data => {
      this.syncStatsData = data;
    });
   }

  async ngOnInit() {
    this._syncStatsService.getAndPushStats();
  }

  public async onSync(): Promise<void> {
    if (!this.connection.status.connected) {
      this._toastService.presentToast('No Internet Connection.', 'warning');
      return;
    }
    this.spinning = true;

    let inspections: Array<StoredInspectionData> = [];
    let qcps: Array<QcpList>;

    // Retrieve stored completed inspections.
    inspections = await this.getAllCompletedInspections();

    if (!inspections.length) {
      this._toastService.presentToast('No Inspections to Sync.', 'warning');
      this.spinning = false;

      return;
    };

    // Retrieve qcp list.
    await this._dataStorage.readQcpListData()
      .then(res => {
        qcps = this.convertObjToArray(res);
      })
      .catch(() => console.log('failed retrieving qcps')
    );

    this.syncReportData = await this.bulkInspectionPost(inspections);

    await this.syncReportModal(this.syncReportData);
  }



  private async bulkInspectionPost(inspections: Array<StoredInspectionData>): Promise<Array<SyncReportData>> {
    const reportData: Array<SyncReportData> = [];

    for (const item of inspections) {
        console.log('insp item: ', item);
          await this._dataProcessor.dataProcessor(item.data, item.id, item.qcpData.riserModel, item.qcpData.recordName)
            .then(async res => {

              if (res) {
                console.log('sync success: ', res);
                this._syncStatsService.decrementAwaitingSync();

                reportData.push({
                  id: item.id,
                  recordName: item.qcpData.recordName,
                  riserTag: item.qcpData.riserTag,
                  component: item.qcpData.componentName,
                  subAssembly: item.qcpData.subAssembly,
                  syncSuccess: true,
                });
              } else {
                console.log('sync failure: ', res);

                reportData.push({
                  id: item.id,
                  recordName: item.qcpData.recordName,
                  riserTag: item.qcpData.riserTag,
                  component: item.qcpData.componentName,
                  subAssembly: item.qcpData.subAssembly,
                  syncSuccess: false,
                });
              }
            })
            .catch(async error => {
              console.log('inspection sync error: ', error);
            });
    }
    return reportData;
  }

  private async getAllCompletedInspections(): Promise<Array<StoredInspectionData>> {
    const user = this._authService.getUser().name;

    return await this._dataStorage.searchCompletedInspections(user)
      .then(res => res)
      .catch(error => error);
  }

  private convertObjToArray(data: QcpList): Array<QcpList> {
    const qcpArray: Array<QcpList> = [];

    for (const item in data) {
      qcpArray.push(data[item]);
    }

    return qcpArray;
  }

  public async syncReportModal(syncReportData: Array<SyncReportData>) {
    this.spinning = false;

    const modal = await this.modalController.create({
      component: SyncReportComponent,
      componentProps: {syncReportData},
      cssClass: 'my-custom-class'
    });
    modal.onDidDismiss().then(() => {
      this.syncReportData = [];
    });
    return await modal.present();
  }

  // Testing method.
  public async clearAll(): Promise<void> {
    await this._dataStorage.clearAllStorage();
  }

}
