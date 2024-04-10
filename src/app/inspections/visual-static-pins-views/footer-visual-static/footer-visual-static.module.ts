import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { FooterVisualStaticComponent } from './footer-visual-static.component';

@NgModule({
  declarations: [
    FooterVisualStaticComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    FooterVisualStaticComponent
  ]
})
export class FooterVisualStaticModule { }
