import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualStaticPinsViewsStepTwoPageRoutingModule } from './visual-static-pins-views-step-two-routing.module';
import { HeaderInspectionsModule } from '../../shared/header-inspections/header-inspections.module';
import { FooterVisualStaticModule } from '../footer-visual-static/footer-visual-static.module';
import { ContentHeaderModule } from '../../shared/content-header/content-header.module';
import { FileUploadModule } from '../../shared/file-upload/file-upload.module';

import { VisualStaticPinsViewsStepTwoPage } from './visual-static-pins-views-step-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    VisualStaticPinsViewsStepTwoPageRoutingModule,
    HeaderInspectionsModule,
    FooterVisualStaticModule,
    ContentHeaderModule,
    FileUploadModule
  ],
  declarations: [VisualStaticPinsViewsStepTwoPage]
})
export class VisualStaticPinsViewsStepTwoPageModule {}
