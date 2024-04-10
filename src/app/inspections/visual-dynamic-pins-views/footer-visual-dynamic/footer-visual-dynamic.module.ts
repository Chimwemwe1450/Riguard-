import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { FooterVisualDynamicComponent } from './footer-visual-dynamic.component';

@NgModule({
  declarations: [
    FooterVisualDynamicComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    FooterVisualDynamicComponent
  ]
})
export class FooterVisualDynamicModule { }
