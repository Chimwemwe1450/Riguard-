import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MagneticParticleStepTwoPage } from './magnetic-particle-step-two.page';

const routes: Routes = [
  {
    path: '',
    component: MagneticParticleStepTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MagneticParticleStepTwoPageRoutingModule {}
