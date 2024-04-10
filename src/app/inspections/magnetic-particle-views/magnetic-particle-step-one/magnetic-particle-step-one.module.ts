import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MagneticParticleStepOnePageRoutingModule } from './magnetic-particle-step-one-routing.module';
import { HeaderInspectionsModule } from '../../shared/header-inspections/header-inspections.module';
import { FooterMagneticModule } from '../footer-magnetic/footer-magnetic.module';
import { ContentHeaderModule } from '../../shared/content-header/content-header.module';

import { MagneticParticleStepOnePage } from './magnetic-particle-step-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MagneticParticleStepOnePageRoutingModule,
    FooterMagneticModule,
    HeaderInspectionsModule,
    ContentHeaderModule
  ],
  declarations: [
    MagneticParticleStepOnePage
  ]
})
export class MagneticParticleStepOnePageModule {}
