import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MagneticParticleStepFivePage } from './magnetic-particle-step-five.page';

const routes: Routes = [
  {
    path: '',
    component: MagneticParticleStepFivePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MagneticParticleStepFivePageRoutingModule {}
