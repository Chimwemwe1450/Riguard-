import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { ToastService } from 'src/app/shared/services/toast.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {

  public newPassword: string;
  public confirmPassword: string;

  constructor(
    private _toastService: ToastService,
    private _loadingService: LoadingService,
    private _loginService: LoginService,
    public modalController: ModalController
  ) { }

  ngOnInit() {
  }

  public async onSubmit(): Promise<void> {
    if (this.newPassword && this.confirmPassword) {
      if (this.newPassword === this.confirmPassword) {
        this._loadingService.presentLoading('Resetting Password...');

        setTimeout(() =>
        {
          this._loginService.changePassword(this.newPassword).subscribe(
            res => {
              this._loadingService.dismissLoading();

              if (res.status === 'failed') {
                this._toastService.presentToast(res.message, 'danger');
              } else {
                this._toastService.presentToast('Password Reset', 'primary');
                this.dismissModal();
              }
          });
        },
        2000);
      } else {
        this._toastService.presentToast('Passwords do not match.', 'warning');
      }
    } else {
      this._toastService.presentToast('Form is Incomplete', 'warning');
    }

  }


  public dismissModal() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

}
