import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { FooterVisualPinAuxComponent } from './footer-visual-pin-aux-line.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [
    FooterVisualPinAuxComponent
  ],
  exports: [
    FooterVisualPinAuxComponent
  ]
})
export class FooterVisualPinAuxModule {}
