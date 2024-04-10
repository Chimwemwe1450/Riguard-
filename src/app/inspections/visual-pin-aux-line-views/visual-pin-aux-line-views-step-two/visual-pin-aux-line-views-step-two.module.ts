import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualPinAuxViewsStepTwoPageRoutingModule } from './visual-pin-aux-line-views-step-two-routing.module';
import { HeaderInspectionsModule } from '../../shared/header-inspections/header-inspections.module';
import { FooterVisualPinAuxModule } from '../footer-visual-pin-aux-line/footer-visual-pin-aux-line.module';
import { ContentHeaderModule } from '../../shared/content-header/content-header.module';
import { FileUploadModule } from '../../shared/file-upload/file-upload.module';

import { VisualPinAuxViewsStepTwoPage } from './visual-pin-aux-line-views-step-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    VisualPinAuxViewsStepTwoPageRoutingModule,
    FooterVisualPinAuxModule,
    HeaderInspectionsModule,
    ContentHeaderModule,
    FileUploadModule
  ],
  declarations: [VisualPinAuxViewsStepTwoPage]
})
export class VisualPinAuxViewsStepTwoPageModule {}
