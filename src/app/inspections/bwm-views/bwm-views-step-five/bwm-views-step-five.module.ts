import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BwmViewsStepFivePageRoutingModule } from './bwm-views-step-five-routing.module';
import { HeaderInspectionsModule } from '../../shared/header-inspections/header-inspections.module';
import { FooterBwmModule } from '../footer-bwm/footer-bwm.module';
import { ContentHeaderModule } from '../../shared/content-header/content-header.module';
import { FileUploadModule } from '../../shared/file-upload/file-upload.module';

import { BwmViewsStepFivePage } from './bwm-views-step-five.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    BwmViewsStepFivePageRoutingModule,
    HeaderInspectionsModule,
    FooterBwmModule,
    ContentHeaderModule,
    FileUploadModule
  ],
  declarations: [BwmViewsStepFivePage]
})
export class BwmViewsStepFivePageModule {}
