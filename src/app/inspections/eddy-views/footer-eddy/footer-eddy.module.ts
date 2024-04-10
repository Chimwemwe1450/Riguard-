import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { FooterEddyComponent } from './footer-eddy.component';

@NgModule({
  declarations: [
    FooterEddyComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    FooterEddyComponent
  ]
})
export class FooterEddyModule { }
