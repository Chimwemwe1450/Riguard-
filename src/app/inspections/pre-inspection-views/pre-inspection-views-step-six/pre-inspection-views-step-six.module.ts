import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreInspectionViewsStepSixPageRoutingModule } from './pre-inspection-views-step-six-routing.module';
import { HeaderInspectionsModule } from '../../shared/header-inspections/header-inspections.module';
import { FooterPreInspectionModule } from '../footer-pre-inspection/footer-pre-inspection.module';
import { ContentHeaderModule } from '../../shared/content-header/content-header.module';

import { PreInspectionViewsStepSixPage } from './pre-inspection-views-step-six.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PreInspectionViewsStepSixPageRoutingModule,
    HeaderInspectionsModule,
    FooterPreInspectionModule,
    ContentHeaderModule
  ],
  declarations: [PreInspectionViewsStepSixPage]
})
export class PreInspectionViewsStepSixPageModule {}
