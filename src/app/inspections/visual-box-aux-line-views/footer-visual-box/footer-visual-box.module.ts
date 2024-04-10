import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { FooterVisualBoxAuxComponent } from './footer-visual-box.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [
    FooterVisualBoxAuxComponent
  ],
  exports: [
    FooterVisualBoxAuxComponent
  ]
})
export class FooterVisualBoxAuxModule {}
