import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualPinViewsStepThreePageRoutingModule } from './visual-pin-views-step-three-routing.module';
import { HeaderInspectionsModule } from '../../shared/header-inspections/header-inspections.module';
import { FooterVisualPinModule } from '../footer-visual-pin/footer-visual-pin.module';
import { ContentHeaderModule } from '../../shared/content-header/content-header.module';
import { FileUploadModule } from '../../shared/file-upload/file-upload.module';

import { VisualPinViewsStepThreePage } from './visual-pin-views-step-three.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    VisualPinViewsStepThreePageRoutingModule,
    HeaderInspectionsModule,
    FooterVisualPinModule,
    ContentHeaderModule,
    FileUploadModule
  ],
  declarations: [VisualPinViewsStepThreePage]
})
export class VisualPinViewsStepThreePageModule {}
