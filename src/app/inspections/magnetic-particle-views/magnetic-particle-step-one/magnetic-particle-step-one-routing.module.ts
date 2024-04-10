import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MagneticParticleStepOnePage } from './magnetic-particle-step-one.page';

const routes: Routes = [
  {
    path: '',
    component: MagneticParticleStepOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MagneticParticleStepOnePageRoutingModule {}
