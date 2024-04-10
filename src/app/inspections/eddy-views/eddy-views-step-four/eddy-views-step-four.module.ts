import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EddyViewsStepFourPageRoutingModule } from './eddy-views-step-four-routing.module';
import { HeaderInspectionsModule } from '../../shared/header-inspections/header-inspections.module';
import { FooterEddyModule } from '../footer-eddy/footer-eddy.module';
import { ContentHeaderModule } from '../../shared/content-header/content-header.module';

import { EddyViewsStepFourPage } from './eddy-views-step-four.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EddyViewsStepFourPageRoutingModule,
    HeaderInspectionsModule,
    FooterEddyModule,
    ContentHeaderModule
  ],
  declarations: [EddyViewsStepFourPage]
})
export class EddyViewsStepFourPageModule {}
