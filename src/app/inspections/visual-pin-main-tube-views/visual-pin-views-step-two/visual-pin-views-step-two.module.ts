import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualPinViewsStepTwoPageRoutingModule } from './visual-pin-views-step-two-routing.module';
import { HeaderInspectionsModule } from '../../shared/header-inspections/header-inspections.module';
import { FooterVisualPinModule } from '../footer-visual-pin/footer-visual-pin.module';
import { ContentHeaderModule } from '../../shared/content-header/content-header.module';
import { FileUploadModule } from '../../shared/file-upload/file-upload.module';

import { VisualPinViewsStepTwoPage } from './visual-pin-views-step-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    VisualPinViewsStepTwoPageRoutingModule,
    FooterVisualPinModule,
    HeaderInspectionsModule,
    ContentHeaderModule,
    FileUploadModule
  ],
  declarations: [VisualPinViewsStepTwoPage]
})
export class VisualPinViewsStepTwoPageModule {}
