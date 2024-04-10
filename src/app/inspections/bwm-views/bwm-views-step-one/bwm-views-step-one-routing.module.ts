import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BwmViewsStepOnePage } from './bwm-views-step-one.page';

const routes: Routes = [
  {
    path: '',
    component: BwmViewsStepOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BwmViewsStepOnePageRoutingModule {}
