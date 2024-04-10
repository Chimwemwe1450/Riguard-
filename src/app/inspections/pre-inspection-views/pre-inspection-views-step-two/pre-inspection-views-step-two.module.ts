import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreInspectionViewsStepTwoPageRoutingModule } from './pre-inspection-views-step-two-routing.module';
import { HeaderInspectionsModule } from '../../shared/header-inspections/header-inspections.module';
import { FooterPreInspectionModule } from '../footer-pre-inspection/footer-pre-inspection.module';
import { ContentHeaderModule } from '../../shared/content-header/content-header.module';

import { PreInspectionViewsStepTwoPage } from './pre-inspection-views-step-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PreInspectionViewsStepTwoPageRoutingModule,
    HeaderInspectionsModule,
    FooterPreInspectionModule,
    ContentHeaderModule
  ],
  declarations: [PreInspectionViewsStepTwoPage]
})
export class PreInspectionViewsStepTwoPageModule {}
