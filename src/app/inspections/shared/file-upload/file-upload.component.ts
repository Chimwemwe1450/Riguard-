import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ModalController } from '@ionic/angular';

import { CropperComponent } from 'src/app/shared/components/cropper/cropper.component';

import { PhotoService } from 'src/app/shared/services/photo.service';

import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent implements OnInit {

  @Output() imagePicked = new EventEmitter<{image: string; category: string}>();
  @Input() category: string;
  @Input() labelPostFix: string;

  public newImage: string;
  public isNativePlatform = true;

  constructor(
    private _photoService: PhotoService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.isNativePlatform = Capacitor.isNativePlatform();
  }

  public async fromGallery(): Promise<void> {
    if (this.isNativePlatform) {
      this.newImage = await this._photoService.fromGallery();
    } else {
      this.newImage = await this._photoService.fromBrowserGallery();
    }

    const croppedImage: string = await this.cropperModal(this.newImage);
    const response = {
      image: croppedImage,
      category: this.category
    };
    console.log('res: ', response);

    this.imagePicked.emit(response);
  }


  private async cropperModal(image: string): Promise<string> {
    const modal = await this.modalController.create({
      component: CropperComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        image
      }
    });
    await modal.present();

    return modal.onDidDismiss().then(data => data.data);
  }

}
