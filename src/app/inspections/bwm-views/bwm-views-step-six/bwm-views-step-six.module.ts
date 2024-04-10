import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BwmViewsStepSixPageRoutingModule } from './bwm-views-step-six-routing.module';
import { HeaderInspectionsModule } from '../../shared/header-inspections/header-inspections.module';
import { FooterBwmModule } from '../footer-bwm/footer-bwm.module';
import { ContentHeaderModule } from '../../shared/content-header/content-header.module';

import { BwmViewsStepSixPage } from './bwm-views-step-six.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    BwmViewsStepSixPageRoutingModule,
    HeaderInspectionsModule,
    FooterBwmModule,
    ContentHeaderModule
  ],
  declarations: [BwmViewsStepSixPage]
})
export class BwmViewsStepSixPageModule {}
