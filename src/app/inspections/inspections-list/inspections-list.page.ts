import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';

import { FilterPage } from '../filter/filter.page';
import { ProfileMenuComponent } from './profile-menu/profile-menu.component';

import { ToastService } from 'src/app/shared/services/toast.service';
import { InspectionsListService } from './inspections-list.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { LoginService } from 'src/app/auth/login.service';
import { RoutePickerService } from '../shared/services/route-picker.service';
import { FilteringService } from '../shared/services/filtering.service';
import { DataStorageService } from 'src/app/shared/services/data-storage.service';
import { SyncStatsService } from 'src/app/shared/services/sync-stats.service';
import { LoadingService } from 'src/app/shared/services/loading.service';

import { QcpList } from 'src/app/shared/models/qcp-list';

import { ConnectionStatusHelper } from 'src/app/shared/classes/connection-status-helper';

@Component({
  selector: 'app-inspections-list',
  templateUrl: './inspections-list.page.html',
  styleUrls: ['./inspections-list.page.scss'],
})
export class InspectionsListPage implements OnInit {

  public data: Array<QcpList> = [];
  public connection = new ConnectionStatusHelper();
  public pageHeader: string;
  public projectSearchVal: string;

  constructor(
    public modalController: ModalController,
    public popoverController: PopoverController,
    private _inspectionsListService: InspectionsListService,
    private _toastService: ToastService,
    private _authService: AuthService,
    private _loginService: LoginService,
    private _routePickerService: RoutePickerService,
    private _filteringService: FilteringService,
    private _dataStorage: DataStorageService,
    private _syncStatsService: SyncStatsService,
    private _loadingService: LoadingService
  ) { }

  ngOnInit() {
    this.subscribeForQcps();
  }

  public subscribeForQcps(): void {
    this._inspectionsListService.$qcps.subscribe(async data => {
      this.data = data;
      this.pageHeader = (await this._dataStorage.retrieveHeading()).heading;
    });

    // If user was already logged in,
    // simply retrieve from storage and
    // send through the data stream.
    if (!this._loginService.didLogIn) {
      console.log('did user log in? ', this._loginService.didLogIn);
      this.retrieveStoredQcpList();
    }
  }

  public async openQcp(index: number): Promise<void> {
    const qcpItem = this.data[index];
    this._inspectionsListService.currentQcp = qcpItem;
    const routeString: string = this.getRouteString(
        qcpItem.recordDescription,
        qcpItem.componentDescription,
        qcpItem.subAssembly,
        qcpItem.manualReport
    );

    this._routePickerService.navigate(routeString, qcpItem.cqmId);
  }

  public async refreshData(event): Promise<void> {
    if (!this.connection.status.connected) {
      this._toastService.presentToast('No Internet Connection.', 'warning');
      event.target.complete();

      return;
    }

    this._inspectionsListService.getQcpList(this._authService.getUserId())
      .toPromise()
      .then(async res => {
        await this._inspectionsListService.buildQcpListData(res);
        // increase Assigned qcps number.
        this._syncStatsService.updateAssigned(res['data'].length);
        this._filteringService.clear();
        this.projectSearchVal = undefined;

        if (!res['data'].length) {
          this._toastService.presentToast('No QCP\'s found.', 'warning');
        }
        event.target.complete();
      })
      .catch(() => {
        this._toastService.presentToast('Failed to retrieve QCP\'s.', 'danger');

        event.target.complete();
      });

  }

  public async filterModal() {
    const modal = await this.modalController.create({
      component: FilterPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  public profile(event: any): void {
    this.profilePopover(event);
  }

  public projectSwitch(): void {
    this._loadingService.presentLoading(`Retrieving project QCP's.`);
    setTimeout(() => {
      this._inspectionsListService.retrieveQcps(this.projectSearchVal);
      this._loadingService.dismissLoading();
    }, 1500);
  }


  // -- my Privates -- //

  private async retrieveStoredQcpList(): Promise<void> {
    this.projectSearchVal = (await this._dataStorage.retrieveHeading()).projectName;
    this._inspectionsListService.retrieveQcps(this.projectSearchVal);
  }

  private getRouteString(recordDescription: string, componentDescription: string, subAssembly: string, manualReport: boolean): string {
    if (manualReport) {
      return 'manual';
    } else {
      if (recordDescription === 'DT') {
        return 'dye-pen';
      } else
      if (recordDescription === 'PINSP') {
        return 'post-inspection';
      } else
      if (recordDescription === 'GVIS') {
        return 'generic-visual';
      } else
      if (recordDescription === 'PRIN') {
        return 'pre-inspection';
      } else
      if (recordDescription === 'BWM') {
        return 'bwm';
      } else
      if (recordDescription === 'UTWT') {
        return 'ut-wall';
      } else
      if (recordDescription === 'DIM') {
        return 'dimensional';
      } else
      if (recordDescription === 'EC') {
        return 'eddy';
      } else
      if (recordDescription === 'MT') {
        return 'magnetic-particle';
      } else
      if (recordDescription === 'VIS') {
        if (componentDescription ===  'PC') {
          if (subAssembly === 'Main tube') {
            return 'visual-pin-main';
          } else {
            return 'visual-pin-aux';
          }
        } else
        if (componentDescription ===  'BC') {
          if (subAssembly === 'Main tube') {
            return 'visual-box-main';
          } else {
            return 'visual-box-aux';
          }
        } else
        if (
            (componentDescription === 'SBOX') ||
            (componentDescription === 'DBOX')
          ) {
          if (
              (subAssembly === 'Choke line') ||
              (subAssembly === 'Kill line') ||
              (subAssembly === 'Booster line') ||
              (subAssembly === 'Hydraulic line #1') ||
              (subAssembly === 'Hydraulic line #2')
            ) {
            return 'visual-box-aux';
          }
        } else
        if (
            (componentDescription === 'SPIN') ||
            (componentDescription === 'DPIN')
          ) {
          if (
              (subAssembly === 'Choke line') ||
              (subAssembly === 'Kill line') ||
              (subAssembly === 'Booster line') ||
              (subAssembly === 'Hydraulic line #1') ||
              (subAssembly === 'Hydraulic line #2')
            ) {
            return 'visual-pin-aux';
          }
        } else
        if (componentDescription === 'SS') {
          // This template is adjusted for SS component. //
          return 'visual-pin-main';
        } else {
          return 'visual';
        };
      };
    }
  }

  private async profilePopover(ev: any) {
    const popover = await this.popoverController.create({
      component: ProfileMenuComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
  }

}
