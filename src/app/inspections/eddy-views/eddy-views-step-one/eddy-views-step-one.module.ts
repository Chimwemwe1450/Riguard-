import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EddyViewsStepOnePageRoutingModule } from './eddy-views-step-one-routing.module';
import { HeaderInspectionsModule } from '../../shared/header-inspections/header-inspections.module';
import { FooterEddyModule } from '../footer-eddy/footer-eddy.module';
import { ContentHeaderModule } from '../../shared/content-header/content-header.module';

import { EddyViewsStepOnePage } from './eddy-views-step-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EddyViewsStepOnePageRoutingModule,
    HeaderInspectionsModule,
    FooterEddyModule,
    ContentHeaderModule
  ],
  declarations: [EddyViewsStepOnePage]
})
export class EddyViewsStepOnePageModule {}
