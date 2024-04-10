import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreInspectionViewsStepFourPageRoutingModule } from './pre-inspection-views-step-four-routing.module';
import { HeaderInspectionsModule } from '../../shared/header-inspections/header-inspections.module';
import { FooterPreInspectionModule } from '../footer-pre-inspection/footer-pre-inspection.module';
import { ContentHeaderModule } from '../../shared/content-header/content-header.module';

import { PreInspectionViewsStepFourPage } from './pre-inspection-views-step-four.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PreInspectionViewsStepFourPageRoutingModule,
    HeaderInspectionsModule,
    FooterPreInspectionModule,
    ContentHeaderModule
  ],
  declarations: [PreInspectionViewsStepFourPage]
})
export class PreInspectionViewsStepFourPageModule {}
