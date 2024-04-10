import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DyePenViewsStepOnePageRoutingModule } from './dye-pen-views-step-one-routing.module';
import { HeaderInspectionsModule } from '../../shared/header-inspections/header-inspections.module';
import { FooterDyePenModule } from '../footer-dye-pen/footer-dye-pen.module';
import { ContentHeaderModule } from '../../shared/content-header/content-header.module';

import { DyePenViewsStepOnePage } from './dye-pen-views-step-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DyePenViewsStepOnePageRoutingModule,
    HeaderInspectionsModule,
    FooterDyePenModule,
    ContentHeaderModule
  ],
  declarations: [DyePenViewsStepOnePage]
})
export class DyePenViewsStepOnePageModule {}
