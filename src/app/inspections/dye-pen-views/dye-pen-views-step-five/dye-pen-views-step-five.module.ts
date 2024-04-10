import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DyePenViewsStepFivePageRoutingModule } from './dye-pen-views-step-five-routing.module';
import { HeaderInspectionsModule } from '../../shared/header-inspections/header-inspections.module';
import { FooterDyePenModule } from '../footer-dye-pen/footer-dye-pen.module';
import { ContentHeaderModule } from '../../shared/content-header/content-header.module';
import { FileUploadModule } from '../../shared/file-upload/file-upload.module';

import { DyePenViewsStepFivePage } from './dye-pen-views-step-five.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DyePenViewsStepFivePageRoutingModule,
    HeaderInspectionsModule,
    FooterDyePenModule,
    ContentHeaderModule,
    FileUploadModule
  ],
  declarations: [DyePenViewsStepFivePage]
})
export class DyePenViewsStepFivePageModule {}
