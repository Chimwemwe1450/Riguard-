import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { FileUploadComponent } from './file-upload.component';

import { CropperModule } from 'src/app/shared/components/cropper/cropper.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    CropperModule
  ],
  declarations: [
    FileUploadComponent
  ],
  exports: [
    FileUploadComponent
  ]
})
export class FileUploadModule {}
