import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { HeaderInspectionsComponent } from './header-inspections.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [
    HeaderInspectionsComponent
  ],
  exports: [
    HeaderInspectionsComponent
  ]
})
export class HeaderInspectionsModule {}
