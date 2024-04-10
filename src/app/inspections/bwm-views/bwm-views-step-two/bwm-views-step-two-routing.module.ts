import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BwmViewsStepTwoPage } from './bwm-views-step-two.page';

const routes: Routes = [
  {
    path: '',
    component: BwmViewsStepTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BwmViewsStepTwoPageRoutingModule {}
