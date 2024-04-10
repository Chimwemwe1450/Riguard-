import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BwmViewsStepEightPage } from './bwm-views-step-eight.page';

const routes: Routes = [
  {
    path: '',
    component: BwmViewsStepEightPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BwmViewsStepEightPageRoutingModule {}
