import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { FooterVisualPinComponent } from './footer-visual-pin.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [
    FooterVisualPinComponent
  ],
  exports: [
    FooterVisualPinComponent
  ]
})
export class FooterVisualPinModule {}
