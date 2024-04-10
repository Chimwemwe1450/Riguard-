import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BwmViewsStepFourPageRoutingModule } from './bwm-views-step-four-routing.module';
import { HeaderInspectionsModule } from '../../shared/header-inspections/header-inspections.module';
import { FooterBwmModule } from '../footer-bwm/footer-bwm.module';
import { ContentHeaderModule } from '../../shared/content-header/content-header.module';

import { BwmViewsStepFourPage } from './bwm-views-step-four.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    BwmViewsStepFourPageRoutingModule,
    HeaderInspectionsModule,
    FooterBwmModule,
    ContentHeaderModule
  ],
  declarations: [BwmViewsStepFourPage]
})
export class BwmViewsStepFourPageModule {}
