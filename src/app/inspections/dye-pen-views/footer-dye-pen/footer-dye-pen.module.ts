import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { FooterDyePenComponent } from './footer-dye-pen.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [
    FooterDyePenComponent
  ],
  exports: [
    FooterDyePenComponent
  ]
})
export class FooterDyePenModule {}
