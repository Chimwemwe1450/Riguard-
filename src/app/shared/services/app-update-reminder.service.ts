import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';

import { AppUpdate, AppUpdateInfo } from '@robingenz/capacitor-app-update';

import { AlertService } from './alert.service';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class AppUpdateReminder {

  public appUpdateInfo: AppUpdateInfo | undefined;

  constructor(
    private readonly platform: Platform,
    private _toastService: ToastService,
    private _alertService: AlertService
  ) {}

  public init(): void {
    if (!this.platform.is('capacitor')) {
      return;
    }

    AppUpdate.getAppUpdateInfo().then(async appUpdateInfo => {
      this.appUpdateInfo = appUpdateInfo;

      // console.log('appUpdateInfo: ', JSON.stringify(this.appUpdateInfo));
      /* this._toastService.presentToastWithButton(
        `CurrentVersion: ${this.appUpdateInfo.currentVersion},
        AvailableVersion: ${this.appUpdateInfo.availableVersion},
        UpdateAvailability: ${this.appUpdateInfo.updateAvailability}`,
        'Dismiss',
        'success'
      ); */

      if (this.appUpdateInfo.updateAvailability === 2) {
        this._alertService.presentAlert(
          'App Update Available',
          'An update is available on the Play Store. Do you want to proceed with the update?',
          'Yes',
          'No',
          async () => {
            await AppUpdate.openAppStore();
          },
          async () => {}
        );
      }
    });
  }

  public async openAppStore(): Promise<void> {
    await AppUpdate.openAppStore();
  }

  public async performImmediateUpdate(): Promise<void> {
    await AppUpdate.performImmediateUpdate();
  }

  public async startFlexibleUpdate(): Promise<void> {
    await AppUpdate.startFlexibleUpdate();
  }

  public async completeFlexibleUpdate(): Promise<void> {
    await AppUpdate.completeFlexibleUpdate();
  }

}
