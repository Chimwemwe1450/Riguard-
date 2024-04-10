import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DyePenViewsStepSixPageRoutingModule } from './dye-pen-views-step-six-routing.module';
import { HeaderInspectionsModule } from '../../shared/header-inspections/header-inspections.module';
import { FooterDyePenModule } from '../footer-dye-pen/footer-dye-pen.module';
import { ContentHeaderModule } from '../../shared/content-header/content-header.module';

import { DyePenViewsStepSixPage } from './dye-pen-views-step-six.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DyePenViewsStepSixPageRoutingModule,
    HeaderInspectionsModule,
    FooterDyePenModule,
    ContentHeaderModule
  ],
  declarations: [DyePenViewsStepSixPage]
})
export class DyePenViewsStepSixPageModule {}
