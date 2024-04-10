import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MagneticParticleStepTwoPageRoutingModule } from './magnetic-particle-step-two-routing.module';
import { HeaderInspectionsModule } from '../../shared/header-inspections/header-inspections.module';
import { FooterMagneticModule } from '../footer-magnetic/footer-magnetic.module';
import { ContentHeaderModule } from '../../shared/content-header/content-header.module';

import { MagneticParticleStepTwoPage } from './magnetic-particle-step-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MagneticParticleStepTwoPageRoutingModule,
    FooterMagneticModule,
    HeaderInspectionsModule,
    ContentHeaderModule
  ],
  declarations: [
    MagneticParticleStepTwoPage
  ]
})
export class MagneticParticleStepTwoPageModule {}
