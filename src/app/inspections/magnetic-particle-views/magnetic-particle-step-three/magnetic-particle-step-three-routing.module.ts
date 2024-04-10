import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MagneticParticleStepThreePage } from './magnetic-particle-step-three.page';

const routes: Routes = [
  {
    path: '',
    component: MagneticParticleStepThreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MagneticParticleStepThreePageRoutingModule {}
