import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualBoxViewsStepFivePageRoutingModule } from './visual-box-views-step-five-routing.module';
import { HeaderInspectionsModule } from '../../shared/header-inspections/header-inspections.module';
import { FooterVisualBoxModule } from '../footer-visual-box/footer-visual-box.module';
import { ContentHeaderModule } from '../../shared/content-header/content-header.module';

import { VisualBoxViewsStepFivePage } from './visual-box-views-step-five.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    VisualBoxViewsStepFivePageRoutingModule,
    FooterVisualBoxModule,
    HeaderInspectionsModule,
    ContentHeaderModule
  ],
  declarations: [VisualBoxViewsStepFivePage]
})
export class VisualBoxViewsStepFivePageModule {}
