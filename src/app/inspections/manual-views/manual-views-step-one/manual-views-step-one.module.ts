import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManualViewsStepOnePageRoutingModule } from './manual-views-step-one-routing.module';
import { HeaderInspectionsModule } from '../../shared/header-inspections/header-inspections.module';
import { FooterManualModule } from '../footer-manual/footer-manual.module';
import { ContentHeaderModule } from '../../shared/content-header/content-header.module';

import { ManualViewsStepOnePage } from './manual-views-step-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ManualViewsStepOnePageRoutingModule,
    HeaderInspectionsModule,
    FooterManualModule,
    ContentHeaderModule
  ],
  declarations: [ManualViewsStepOnePage]
})
export class ManualViewsStepOnePageModule {}
