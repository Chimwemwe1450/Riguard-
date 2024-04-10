import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualStaticPinsViewsStepOnePageRoutingModule } from './visual-static-pins-views-step-one-routing.module';
import { HeaderInspectionsModule } from '../../shared/header-inspections/header-inspections.module';
import { FooterVisualStaticModule } from '../footer-visual-static/footer-visual-static.module';
import { ContentHeaderModule } from '../../shared/content-header/content-header.module';
import { FileUploadModule } from '../../shared/file-upload/file-upload.module';

import { VisualStaticPinsViewsStepOnePage } from './visual-static-pins-views-step-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    VisualStaticPinsViewsStepOnePageRoutingModule,
    HeaderInspectionsModule,
    FooterVisualStaticModule,
    ContentHeaderModule,
    FileUploadModule
  ],
  declarations: [VisualStaticPinsViewsStepOnePage]
})
export class VisualStaticPinsViewsStepOnePageModule {}
