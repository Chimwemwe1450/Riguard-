import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { FooterVisualGenericComponent } from './footer-visual-generic.component';

@NgModule({
  declarations: [
    FooterVisualGenericComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    FooterVisualGenericComponent
  ]
})
export class FooterVisualGenericModule { }
