import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualBoxAuxViewsStepTwoPageRoutingModule } from './visual-box-views-step-two-routing.module';
import { HeaderInspectionsModule } from '../../shared/header-inspections/header-inspections.module';
import { FooterVisualBoxAuxModule } from '../footer-visual-box/footer-visual-box.module';
import { ContentHeaderModule } from '../../shared/content-header/content-header.module';
import { FileUploadModule } from '../../shared/file-upload/file-upload.module';

import { VisualBoxAuxViewsStepTwoPage } from './visual-box-views-step-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    VisualBoxAuxViewsStepTwoPageRoutingModule,
    FooterVisualBoxAuxModule,
    HeaderInspectionsModule,
    ContentHeaderModule,
    FileUploadModule
  ],
  declarations: [VisualBoxAuxViewsStepTwoPage]
})
export class VisualBoxAuxViewsStepTwoPageModule {}
