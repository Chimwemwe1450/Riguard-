import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualDynamicPinsViewsStepThreePageRoutingModule } from './visual-dynamic-pins-views-step-three-routing.module';
import { HeaderInspectionsModule } from '../../shared/header-inspections/header-inspections.module';
import { FooterVisualDynamicModule } from '../footer-visual-dynamic/footer-visual-dynamic.module';
import { ContentHeaderModule } from '../../shared/content-header/content-header.module';

import { VisualDynamicPinsViewsStepThreePage } from './visual-dynamic-pins-views-step-three.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    VisualDynamicPinsViewsStepThreePageRoutingModule,
    HeaderInspectionsModule,
    FooterVisualDynamicModule,
    ContentHeaderModule
  ],
  declarations: [VisualDynamicPinsViewsStepThreePage]
})
export class VisualDynamicPinsViewsStepThreePageModule {}
