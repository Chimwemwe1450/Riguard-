import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService } from 'src/app/shared/services/alert.service';
import { LoadingService } from 'src/app/shared/services/loading.service';

import { ModalController, PopoverController } from '@ionic/angular';
import { ChangePasswordPage } from 'src/app/auth/change-password/change-password.page';

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss'],
})
export class ProfileMenuComponent implements OnInit {

  constructor(
    private router: Router,
    private _alertService: AlertService,
    private _loadingService: LoadingService,
    public modalController: ModalController,
    private popoverController: PopoverController
  ) { }

  ngOnInit() {}

  public logOut(): void {
    this.dismissPopover();

    this._alertService.presentAlert(
      'Log Out',
      'Do you want to log out?',
      'Yes',
      'Cancel',
      async () => {
        await this._loadingService.presentLoading('Logging Out...', 1500);
        this.clearStoredPreferences();
        this.router.navigate(['login']);
        this._loadingService.dismissLoading();
      },
      async () => {
        console.log('Cancel logout');
      }
    );
  }

  public async resetPassword(): Promise<void> {
    this.dismissPopover();

    const modal = await this.modalController.create({
      component: ChangePasswordPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }


  private clearStoredPreferences(): void {
    localStorage.clear();
  }

  public dismissPopover() {
    this.popoverController.dismiss({
      dismissed: true
    });
  }

}
