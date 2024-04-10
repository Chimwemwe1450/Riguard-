import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DimensionalViewsStepOnePageRoutingModule } from './dimensional-views-step-one-routing.module';
import { HeaderInspectionsModule } from '../../shared/header-inspections/header-inspections.module';
import { FooterDimensionalModule } from '../footer-dimensional/footer-dimensional.module';
import { ContentHeaderModule } from '../../shared/content-header/content-header.module';

import { DimensionalViewsStepOnePage } from './dimensional-views-step-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DimensionalViewsStepOnePageRoutingModule,
    FooterDimensionalModule,
    HeaderInspectionsModule,
    ContentHeaderModule
  ],
  declarations: [DimensionalViewsStepOnePage]
})
export class DimensionalViewsStepOnePageModule {}
