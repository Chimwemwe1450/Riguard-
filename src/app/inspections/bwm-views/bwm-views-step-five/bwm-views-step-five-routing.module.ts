import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BwmViewsStepFivePage } from './bwm-views-step-five.page';

const routes: Routes = [
  {
    path: '',
    component: BwmViewsStepFivePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BwmViewsStepFivePageRoutingModule {}
