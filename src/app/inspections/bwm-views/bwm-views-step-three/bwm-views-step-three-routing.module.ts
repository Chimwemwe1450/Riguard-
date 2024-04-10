import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BwmViewsStepThreePage } from './bwm-views-step-three.page';

const routes: Routes = [
  {
    path: '',
    component: BwmViewsStepThreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BwmViewsStepThreePageRoutingModule {}
