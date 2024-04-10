import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BwmViewsStepTwoPageRoutingModule } from './bwm-views-step-two-routing.module';
import { HeaderInspectionsModule } from '../../shared/header-inspections/header-inspections.module';
import { FooterBwmModule } from '../footer-bwm/footer-bwm.module';
import { ContentHeaderModule } from '../../shared/content-header/content-header.module';

import { BwmViewsStepTwoPage } from './bwm-views-step-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    BwmViewsStepTwoPageRoutingModule,
    HeaderInspectionsModule,
    FooterBwmModule,
    ContentHeaderModule
  ],
  declarations: [
    BwmViewsStepTwoPage
  ]
})
export class BwmViewsStepTwoPageModule {}
