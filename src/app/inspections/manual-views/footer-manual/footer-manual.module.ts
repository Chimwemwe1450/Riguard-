import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { FooterManualComponent } from './footer-manual.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [
    FooterManualComponent
  ],
  exports: [
    FooterManualComponent
  ]
})
export class FooterManualModule {}
