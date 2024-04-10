import { Component, Input, OnInit } from '@angular/core';

import { ModalController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-cropper',
  templateUrl: './cropper.component.html',
  styleUrls: ['./cropper.component.scss'],
})
export class CropperComponent implements OnInit {

  @Input() image: string;

  private imageUrl = '';
  private croppedImage: string;
  public imageDimensions: number;

  constructor(
    public modalController: ModalController,
    platform: Platform
  ) {
    platform.ready().then(() => {
      if (platform.width() < 600) {
        this.imageDimensions = Math.trunc(platform.width() * 0.9);
      } else {
        this.imageDimensions = 600;
      }
    });
  }

  ngOnInit() {
    console.log(this.imageDimensions);
  }

  public setImage = (newValue) => {
    this.imageUrl = newValue;
  };

  public handleCropperChange = (el, imageElement) => {
    this.setImage(imageElement.src);
  };

  public cropImage(): void {
    const canvas = document.getElementsByTagName('canvas')[0];
    const dataURL = canvas.toDataURL('image/png');
    this.croppedImage = dataURL;

    this.modalController.dismiss(this.croppedImage);
  }

  public async dismissModal(): Promise<void> {
    this.modalController.dismiss();
  }

}
