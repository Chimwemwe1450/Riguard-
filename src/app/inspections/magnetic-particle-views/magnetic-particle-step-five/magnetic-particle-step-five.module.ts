import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MagneticParticleStepFivePageRoutingModule } from './magnetic-particle-step-five-routing.module';
import { HeaderInspectionsModule } from '../../shared/header-inspections/header-inspections.module';
import { FooterMagneticModule } from '../footer-magnetic/footer-magnetic.module';
import { ContentHeaderModule } from '../../shared/content-header/content-header.module';
import { FileUploadModule } from '../../shared/file-upload/file-upload.module';

import { MagneticParticleStepFivePage } from './magnetic-particle-step-five.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MagneticParticleStepFivePageRoutingModule,
    FooterMagneticModule,
    HeaderInspectionsModule,
    ContentHeaderModule,
    FileUploadModule
  ],
  declarations: [
    MagneticParticleStepFivePage
  ]
})
export class MagneticParticleStepFivePageModule {}
