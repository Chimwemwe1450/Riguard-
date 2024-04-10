import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreInspectionViewsStepOnePageRoutingModule } from './pre-inspection-views-step-one-routing.module';
import { HeaderInspectionsModule } from '../../shared/header-inspections/header-inspections.module';
import { FooterPreInspectionModule } from '../footer-pre-inspection/footer-pre-inspection.module';
import { ContentHeaderModule } from '../../shared/content-header/content-header.module';

import { PreInspectionViewsStepOnePage } from './pre-inspection-views-step-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PreInspectionViewsStepOnePageRoutingModule,
    HeaderInspectionsModule,
    FooterPreInspectionModule,
    ContentHeaderModule
  ],
  declarations: [PreInspectionViewsStepOnePage]
})
export class PreInspectionViewsStepOnePageModule {}
