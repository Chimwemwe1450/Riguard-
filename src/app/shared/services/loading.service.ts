import { Injectable } from '@angular/core';

import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor(
    public loadingController: LoadingController
  ) { }

  public async presentLoading(message: string, duration?: number): Promise<void> {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message,
      duration
    });
    await loading.present();

    return await loading.present();

    // const { role, data } = await loading.onDidDismiss();
    // console.log('Loading dismissed!');
  }

  public async dismissLoading(): Promise<void> {
    this.loadingController.dismiss();
  }

}
