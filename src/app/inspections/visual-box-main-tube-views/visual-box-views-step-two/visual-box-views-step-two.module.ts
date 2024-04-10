import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualBoxViewsStepTwoPageRoutingModule } from './visual-box-views-step-two-routing.module';
import { HeaderInspectionsModule } from '../../shared/header-inspections/header-inspections.module';
import { FooterVisualBoxModule } from '../footer-visual-box/footer-visual-box.module';
import { ContentHeaderModule } from '../../shared/content-header/content-header.module';
import { FileUploadModule } from '../../shared/file-upload/file-upload.module';

import { VisualBoxViewsStepTwoPage } from './visual-box-views-step-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    VisualBoxViewsStepTwoPageRoutingModule,
    FooterVisualBoxModule,
    HeaderInspectionsModule,
    ContentHeaderModule,
    FileUploadModule
  ],
  declarations: [VisualBoxViewsStepTwoPage]
})
export class VisualBoxViewsStepTwoPageModule {}
