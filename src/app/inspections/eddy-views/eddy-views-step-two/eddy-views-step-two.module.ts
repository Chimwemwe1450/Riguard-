import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EddyViewsStepTwoPageRoutingModule } from './eddy-views-step-two-routing.module';
import { HeaderInspectionsModule } from '../../shared/header-inspections/header-inspections.module';
import { FooterEddyModule } from '../footer-eddy/footer-eddy.module';
import { ContentHeaderModule } from '../../shared/content-header/content-header.module';

import { EddyViewsStepTwoPage } from './eddy-views-step-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EddyViewsStepTwoPageRoutingModule,
    HeaderInspectionsModule,
    FooterEddyModule,
    ContentHeaderModule
  ],
  declarations: [EddyViewsStepTwoPage]
})
export class EddyViewsStepTwoPageModule {}
