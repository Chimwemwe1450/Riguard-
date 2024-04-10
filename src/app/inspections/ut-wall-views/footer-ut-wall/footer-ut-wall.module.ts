import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { FooterUtWallComponent } from './footer-ut-wall.component';

@NgModule({
  declarations: [
    FooterUtWallComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    FooterUtWallComponent
  ]
})
export class FooterUtWallModule { }
