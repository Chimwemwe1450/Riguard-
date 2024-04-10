import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MagneticParticleStepThreePageRoutingModule } from './magnetic-particle-step-three-routing.module';
import { HeaderInspectionsModule } from '../../shared/header-inspections/header-inspections.module';
import { FooterMagneticModule } from '../footer-magnetic/footer-magnetic.module';
import { ContentHeaderModule } from '../../shared/content-header/content-header.module';

import { MagneticParticleStepThreePage } from './magnetic-particle-step-three.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MagneticParticleStepThreePageRoutingModule,
    FooterMagneticModule,
    HeaderInspectionsModule,
    ContentHeaderModule
  ],
  declarations: [
    MagneticParticleStepThreePage
  ]
})
export class MagneticParticleStepThreePageModule {}
