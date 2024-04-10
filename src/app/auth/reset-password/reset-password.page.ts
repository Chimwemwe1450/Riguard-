import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { ToastService } from 'src/app/shared/services/toast.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {

  public emailAddress: string;

  constructor(
    private _toastService: ToastService,
    private _loadingService: LoadingService,
    private _loginService: LoginService,
    public modalController: ModalController
  ) { }

  ngOnInit() {
  }

  public async onSubmit(): Promise<void> {
    if (this.emailAddress) {
      this._toastService.presentToast('Resetting Password...', 'primary');

      setTimeout(() =>
      {
        this._loginService.resetPassword(this.emailAddress).subscribe(
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
      this._toastService.presentToast('Please provide Email Address', 'warning');
    }

  }

  public dismissModal() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

}
