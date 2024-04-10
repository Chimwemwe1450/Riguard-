import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DyePenViewsStepFourPageRoutingModule } from './dye-pen-views-step-four-routing.module';
import { HeaderInspectionsModule } from '../../shared/header-inspections/header-inspections.module';
import { FooterDyePenModule } from '../footer-dye-pen/footer-dye-pen.module';
import { ContentHeaderModule } from '../../shared/content-header/content-header.module';

import { DyePenViewsStepFourPage } from './dye-pen-views-step-four.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DyePenViewsStepFourPageRoutingModule,
    HeaderInspectionsModule,
    FooterDyePenModule,
    ContentHeaderModule
  ],
  declarations: [DyePenViewsStepFourPage]
})
export class DyePenViewsStepFourPageModule {}
