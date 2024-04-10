import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BwmViewsStepFourPage } from './bwm-views-step-four.page';

const routes: Routes = [
  {
    path: '',
    component: BwmViewsStepFourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BwmViewsStepFourPageRoutingModule {}
