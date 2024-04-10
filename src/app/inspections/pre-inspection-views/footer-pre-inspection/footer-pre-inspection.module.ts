import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { FooterPreInspectionComponent } from './footer-pre-inspection.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [
    FooterPreInspectionComponent
  ],
  exports: [
    FooterPreInspectionComponent
  ]
})
export class FooterPreInspectionModule {}
