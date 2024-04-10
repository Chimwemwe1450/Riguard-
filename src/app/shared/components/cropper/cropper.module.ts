import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { ImageCropperComponent } from '../image-cropper/image-cropper.component';
import { CropperComponent } from './cropper.component';

@NgModule({
  declarations: [
    CropperComponent,
    ImageCropperComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    CropperComponent
  ]
})
export class CropperModule { }
