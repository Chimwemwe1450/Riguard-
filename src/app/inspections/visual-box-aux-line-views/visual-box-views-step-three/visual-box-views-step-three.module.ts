import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualBoxAuxViewsStepThreePageRoutingModule } from './visual-box-views-step-three-routing.module';
import { HeaderInspectionsModule } from '../../shared/header-inspections/header-inspections.module';
import { FooterVisualBoxAuxModule } from '../footer-visual-box/footer-visual-box.module';
import { ContentHeaderModule } from '../../shared/content-header/content-header.module';

import { VisualBoxAuxViewsStepThreePage } from './visual-box-views-step-three.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    VisualBoxAuxViewsStepThreePageRoutingModule,
    FooterVisualBoxAuxModule,
    HeaderInspectionsModule,
    ContentHeaderModule
  ],
  declarations: [VisualBoxAuxViewsStepThreePage]
})
export class VisualBoxAuxViewsStepThreePageModule {}
