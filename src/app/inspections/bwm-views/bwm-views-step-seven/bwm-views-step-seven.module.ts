import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BwmViewsStepSevenPageRoutingModule } from './bwm-views-step-seven-routing.module';
import { HeaderInspectionsModule } from '../../shared/header-inspections/header-inspections.module';
import { FooterBwmModule } from '../footer-bwm/footer-bwm.module';
import { ContentHeaderModule } from '../../shared/content-header/content-header.module';
import { FileUploadModule } from '../../shared/file-upload/file-upload.module';

import { BwmViewsStepSevenPage } from './bwm-views-step-seven.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    BwmViewsStepSevenPageRoutingModule,
    HeaderInspectionsModule,
    FooterBwmModule,
    ContentHeaderModule,
    FileUploadModule
  ],
  declarations: [BwmViewsStepSevenPage]
})
export class BwmViewsStepSevenPageModule {}
