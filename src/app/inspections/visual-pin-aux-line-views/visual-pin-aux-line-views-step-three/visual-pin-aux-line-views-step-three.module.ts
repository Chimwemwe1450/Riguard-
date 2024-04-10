import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualPinAuxViewsStepThreePageRoutingModule } from './visual-pin-aux-line-views-step-three-routing.module';
import { HeaderInspectionsModule } from '../../shared/header-inspections/header-inspections.module';
import { FooterVisualPinAuxModule } from '../footer-visual-pin-aux-line/footer-visual-pin-aux-line.module';
import { ContentHeaderModule } from '../../shared/content-header/content-header.module';

import { VisualPinAuxViewsStepThreePage } from './visual-pin-aux-line-views-step-three.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    VisualPinAuxViewsStepThreePageRoutingModule,
    FooterVisualPinAuxModule,
    HeaderInspectionsModule,
    ContentHeaderModule
  ],
  declarations: [VisualPinAuxViewsStepThreePage]
})
export class VisualPinAuxViewsStepThreePageModule {}
