import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MagneticParticleStepSixPageRoutingModule } from './magnetic-particle-step-six-routing.module';
import { HeaderInspectionsModule } from '../../shared/header-inspections/header-inspections.module';
import { FooterMagneticModule } from '../footer-magnetic/footer-magnetic.module';
import { ContentHeaderModule } from '../../shared/content-header/content-header.module';

import { MagneticParticleStepSixPage } from './magnetic-particle-step-six.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MagneticParticleStepSixPageRoutingModule,
    FooterMagneticModule,
    HeaderInspectionsModule,
    ContentHeaderModule
  ],
  declarations: [
    MagneticParticleStepSixPage
  ]
})
export class MagneticParticleStepSixPageModule {}
