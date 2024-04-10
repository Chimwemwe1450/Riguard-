import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EddyViewsStepThreePageRoutingModule } from './eddy-views-step-three-routing.module';
import { HeaderInspectionsModule } from '../../shared/header-inspections/header-inspections.module';
import { FooterEddyModule } from '../footer-eddy/footer-eddy.module';
import { ContentHeaderModule } from '../../shared/content-header/content-header.module';
import { FileUploadModule } from '../../shared/file-upload/file-upload.module';

import { EddyViewsStepThreePage } from './eddy-views-step-three.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EddyViewsStepThreePageRoutingModule,
    HeaderInspectionsModule,
    FooterEddyModule,
    ContentHeaderModule,
    FileUploadModule
  ],
  declarations: [EddyViewsStepThreePage]
})
export class EddyViewsStepThreePageModule {}
