import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { FooterDimensionalComponent } from './footer-dimensional.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [
    FooterDimensionalComponent
  ],
  exports: [
    FooterDimensionalComponent
  ]
})
export class FooterDimensionalModule {}
