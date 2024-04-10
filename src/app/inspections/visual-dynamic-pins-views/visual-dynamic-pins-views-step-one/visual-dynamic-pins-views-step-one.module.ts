import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualDynamicPinsViewsStepOnePageRoutingModule } from './visual-dynamic-pins-views-step-one-routing.module';
import { HeaderInspectionsModule } from '../../shared/header-inspections/header-inspections.module';
import { FooterVisualDynamicModule } from '../footer-visual-dynamic/footer-visual-dynamic.module';
import { ContentHeaderModule } from '../../shared/content-header/content-header.module';
import { FileUploadModule } from '../../shared/file-upload/file-upload.module';

import { VisualDynamicPinsViewsStepOnePage } from './visual-dynamic-pins-views-step-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    VisualDynamicPinsViewsStepOnePageRoutingModule,
    HeaderInspectionsModule,
    FooterVisualDynamicModule,
    ContentHeaderModule,
    FileUploadModule
  ],
  declarations: [VisualDynamicPinsViewsStepOnePage]
})
export class VisualDynamicPinsViewsStepOnePageModule {}
