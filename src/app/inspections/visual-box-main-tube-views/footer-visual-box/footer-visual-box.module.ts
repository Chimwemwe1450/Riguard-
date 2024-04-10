import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { FooterVisualBoxComponent } from './footer-visual-box.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [
    FooterVisualBoxComponent
  ],
  exports: [
    FooterVisualBoxComponent
  ]
})
export class FooterVisualBoxModule {}
