import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BwmViewsStepNinePageRoutingModule } from './bwm-views-step-nine-routing.module';
import { HeaderInspectionsModule } from '../../shared/header-inspections/header-inspections.module';
import { FooterBwmModule } from '../footer-bwm/footer-bwm.module';
import { ContentHeaderModule } from '../../shared/content-header/content-header.module';

import { BwmViewsStepNinePage } from './bwm-views-step-nine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    BwmViewsStepNinePageRoutingModule,
    HeaderInspectionsModule,
    FooterBwmModule,
    ContentHeaderModule
  ],
  declarations: [BwmViewsStepNinePage]
})
export class BwmViewsStepNinePageModule {}
