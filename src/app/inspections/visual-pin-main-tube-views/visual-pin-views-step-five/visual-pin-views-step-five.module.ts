import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualPinViewsStepFivePageRoutingModule } from './visual-pin-views-step-five-routing.module';
import { HeaderInspectionsModule } from '../../shared/header-inspections/header-inspections.module';
import { FooterVisualPinModule } from '../footer-visual-pin/footer-visual-pin.module';
import { ContentHeaderModule } from '../../shared/content-header/content-header.module';

import { VisualPinViewsStepFivePage } from './visual-pin-views-step-five.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    VisualPinViewsStepFivePageRoutingModule,
    FooterVisualPinModule,
    HeaderInspectionsModule,
    ContentHeaderModule
  ],
  declarations: [VisualPinViewsStepFivePage]
})
export class VisualPinViewsStepFivePageModule {}
