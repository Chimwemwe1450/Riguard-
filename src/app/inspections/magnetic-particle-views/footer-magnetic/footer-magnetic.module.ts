import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { FooterMagneticComponent } from './footer-magnetic.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [
    FooterMagneticComponent
  ],
  exports: [
    FooterMagneticComponent
  ]
})
export class FooterMagneticModule {}
