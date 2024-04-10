import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MagneticParticleStepFourPage } from './magnetic-particle-step-four.page';

const routes: Routes = [
  {
    path: '',
    component: MagneticParticleStepFourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MagneticParticleStepFourPageRoutingModule {}
