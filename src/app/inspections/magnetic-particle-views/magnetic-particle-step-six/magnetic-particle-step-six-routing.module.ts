import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MagneticParticleStepSixPage } from './magnetic-particle-step-six.page';

const routes: Routes = [
  {
    path: '',
    component: MagneticParticleStepSixPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MagneticParticleStepSixPageRoutingModule {}
