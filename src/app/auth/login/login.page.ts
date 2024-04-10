import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ModalController } from '@ionic/angular';

import { environment } from 'src/environments/environment';

import { LoginService } from '../login.service';
import { ToastService } from 'src/app/shared/services/toast.service';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { InspectionsListService } from 'src/app/inspections/inspections-list/inspections-list.service';
import { DataStorageService } from 'src/app/shared/services/data-storage.service';
import { SyncStatsService } from 'src/app/shared/services/sync-stats.service';

import { ResetPasswordPage } from '../reset-password/reset-password.page';

import { SyncStatsData } from 'src/app/shared/models/sync-stats-data.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginForm: FormGroup;

  constructor(
    private router: Router,
    public modalController: ModalController,
    private _loginService: LoginService,
    private _toastService: ToastService,
    private _loadingService: LoadingService,
    private _inspectionsListService: InspectionsListService,
    private _dataStorage: DataStorageService,
    private _syncStatsService: SyncStatsService
  ) { }

  async ngOnInit() {
    // this._dataStorage.clearAllStorage();
    console.log('ENV: ', environment.identify);
    this.loginForm = new FormGroup({
      email: new FormControl(null, {
        validators: [Validators.required]
      }),
      password: new FormControl(null, {
        validators: [Validators.required]
      }),
    });
  }

  public async onSubmit(): Promise<void> {
    const formData: FormData = this.loginForm.value;

    if (this.loginForm.valid) {
      this._loadingService.presentLoading('Logging In...');

      this._loginService.login(formData).subscribe(async response => {
        if (response.status === 'failed') {
          // console.log('Failed to login');
          this._loadingService.dismissLoading();
          this._toastService.presentToast('Username or password is incorrect.', 'danger');
        } else {
        this._loginService.didLogIn = true;
        this.storeUserDetails(response);

        const qcpList = await this._dataStorage.readQcpListData();
        if (qcpList === null) {
          await this.router.navigate(['inspections']);
          this.getQcps(response.data.user.id);

        } else {
          await this.router.navigate(['inspections']);
          this._inspectionsListService.convertQcpsObjToArray(qcpList);

        }

        this._loadingService.dismissLoading();}
      }),
      (failed) => {
        console.log('Failed to login', failed);
        this._loadingService.dismissLoading();
        this._toastService.presentToast('Error logging in.', 'danger');
      };
    } else {
      this._toastService.presentToast('Fill in all fields.', 'warning');
    }
  }

  public async passwordResetModal() {
    const modal = await this.modalController.create({
      component: ResetPasswordPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  private getQcps(userId: string): void {
    this._inspectionsListService.getQcpList(userId)
      .toPromise()
      .then(async res => {
        await this._inspectionsListService.buildQcpListData(res);
        this.setInitSyncData(res['data'].length);
      });
  }

  private storeUserDetails(response: any) {
    localStorage.setItem('token', response.data.jwttoken);
    localStorage.setItem('user', JSON.stringify({name: response.data.user.firstName, email: response.data.user.login}));
    localStorage.setItem('userId', response.data.user.id.toString());
  }

  private async setInitSyncData(qcpLength: number): Promise<void> {
    const newSyncStats: SyncStatsData = {
      assigned: qcpLength,
      completed: 0,
      awaitingSync: 0,
      completionPercentage: 0,
    };

    await this._dataStorage.writeSyncStats(newSyncStats, 'syncStats').then(
      res => {
        this._syncStatsService.getAndPushStats();
      }
    );
  }

}
