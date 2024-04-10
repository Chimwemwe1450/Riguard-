import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreInspectionViewsStepFivePageRoutingModule } from './pre-inspection-views-step-five-routing.module';
import { HeaderInspectionsModule } from '../../shared/header-inspections/header-inspections.module';
import { FooterPreInspectionModule } from '../footer-pre-inspection/footer-pre-inspection.module';
import { ContentHeaderModule } from '../../shared/content-header/content-header.module';

import { PreInspectionViewsStepFivePage } from './pre-inspection-views-step-five.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PreInspectionViewsStepFivePageRoutingModule,
    HeaderInspectionsModule,
    FooterPreInspectionModule,
    ContentHeaderModule
  ],
  declarations: [PreInspectionViewsStepFivePage]
})
export class PreInspectionViewsStepFivePageModule {}
