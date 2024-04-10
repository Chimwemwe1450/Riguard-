import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DyePenViewsStepTwoPageRoutingModule } from './dye-pen-views-step-two-routing.module';
import { HeaderInspectionsModule } from '../../shared/header-inspections/header-inspections.module';
import { FooterDyePenModule } from '../footer-dye-pen/footer-dye-pen.module';
import { ContentHeaderModule } from '../../shared/content-header/content-header.module';

import { DyePenViewsStepTwoPage } from './dye-pen-views-step-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DyePenViewsStepTwoPageRoutingModule,
    HeaderInspectionsModule,
    FooterDyePenModule,
    ContentHeaderModule
  ],
  declarations: [DyePenViewsStepTwoPage]
})
export class DyePenViewsStepTwoPageModule {}
