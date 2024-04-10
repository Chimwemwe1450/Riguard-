import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualBoxViewsStepThreePageRoutingModule } from './visual-box-views-step-three-routing.module';
import { HeaderInspectionsModule } from '../../shared/header-inspections/header-inspections.module';
import { FooterVisualBoxModule } from '../footer-visual-box/footer-visual-box.module';
import { ContentHeaderModule } from '../../shared/content-header/content-header.module';
import { FileUploadModule } from '../../shared/file-upload/file-upload.module';

import { VisualBoxViewsStepThreePage } from './visual-box-views-step-three.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    VisualBoxViewsStepThreePageRoutingModule,
    HeaderInspectionsModule,
    FooterVisualBoxModule,
    ContentHeaderModule,
    FileUploadModule
  ],
  declarations: [VisualBoxViewsStepThreePage]
})
export class VisualBoxViewsStepThreePageModule {}
