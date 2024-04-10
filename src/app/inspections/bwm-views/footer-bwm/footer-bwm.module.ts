import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { FooterBwmComponent } from './footer-bwm.component';

@NgModule({
  declarations: [
    FooterBwmComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    FooterBwmComponent
  ]
})
export class FooterBwmModule { }
