import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualPinAuxViewsStepOnePageRoutingModule } from './visual-pin-aux-line-views-step-one-routing.module';
import { HeaderInspectionsModule } from '../../shared/header-inspections/header-inspections.module';
import { FooterVisualPinAuxModule } from '../footer-visual-pin-aux-line/footer-visual-pin-aux-line.module';
import { ContentHeaderModule } from '../../shared/content-header/content-header.module';
import { FileUploadModule } from '../../shared/file-upload/file-upload.module';

import { VisualPinAuxViewsStepOnePage } from './visual-pin-aux-line-views-step-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    VisualPinAuxViewsStepOnePageRoutingModule,
    FooterVisualPinAuxModule,
    HeaderInspectionsModule,
    ContentHeaderModule,
    FileUploadModule
  ],
  declarations: [VisualPinAuxViewsStepOnePage]
})
export class VisualPinAuxViewsStepOnePageModule {}
