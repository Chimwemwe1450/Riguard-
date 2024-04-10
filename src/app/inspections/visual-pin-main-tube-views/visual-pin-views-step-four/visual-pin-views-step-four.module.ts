import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualPinViewsStepFourPageRoutingModule } from './visual-pin-views-step-four-routing.module';

import { HeaderInspectionsModule } from '../../shared/header-inspections/header-inspections.module';
import { FooterVisualPinModule } from '../footer-visual-pin/footer-visual-pin.module';
import { ContentHeaderModule } from '../../shared/content-header/content-header.module';
import { FileUploadModule } from '../../shared/file-upload/file-upload.module';

import { VisualPinViewsStepFourPage } from './visual-pin-views-step-four.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    VisualPinViewsStepFourPageRoutingModule,
    HeaderInspectionsModule,
    FooterVisualPinModule,
    ContentHeaderModule,
    FileUploadModule
  ],
  declarations: [VisualPinViewsStepFourPage]
})
export class VisualPinViewsStepFourPageModule {}
