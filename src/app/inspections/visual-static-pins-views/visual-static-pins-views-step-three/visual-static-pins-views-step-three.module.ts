import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualStaticPinsViewsStepThreePageRoutingModule } from './visual-static-pins-views-step-three-routing.module';
import { HeaderInspectionsModule } from '../../shared/header-inspections/header-inspections.module';
import { FooterVisualStaticModule } from '../footer-visual-static/footer-visual-static.module';
import { ContentHeaderModule } from '../../shared/content-header/content-header.module';

import { VisualStaticPinsViewsStepThreePage } from './visual-static-pins-views-step-three.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    VisualStaticPinsViewsStepThreePageRoutingModule,
    HeaderInspectionsModule,
    FooterVisualStaticModule,
    ContentHeaderModule
  ],
  declarations: [VisualStaticPinsViewsStepThreePage]
})
export class VisualStaticPinsViewsStepThreePageModule {}
