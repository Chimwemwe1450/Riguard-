import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { FooterPostInspectionComponent } from './footer-post-inspection.component';

@NgModule({
  declarations: [
    FooterPostInspectionComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    FooterPostInspectionComponent
  ]
})
export class FooterPostInspectionModule { }
