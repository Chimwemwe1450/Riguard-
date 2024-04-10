import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BwmViewsStepThreePageRoutingModule } from './bwm-views-step-three-routing.module';
import { HeaderInspectionsModule } from '../../shared/header-inspections/header-inspections.module';
import { FooterBwmModule } from '../footer-bwm/footer-bwm.module';
import { ContentHeaderModule } from '../../shared/content-header/content-header.module';

import { BwmViewsStepThreePage } from './bwm-views-step-three.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    BwmViewsStepThreePageRoutingModule,
    HeaderInspectionsModule,
    FooterBwmModule,
    ContentHeaderModule
  ],
  declarations: [BwmViewsStepThreePage]
})
export class BwmViewsStepThreePageModule {}
