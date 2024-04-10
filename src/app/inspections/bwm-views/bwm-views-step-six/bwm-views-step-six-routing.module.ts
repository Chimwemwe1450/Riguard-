import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BwmViewsStepSixPage } from './bwm-views-step-six.page';

const routes: Routes = [
  {
    path: '',
    component: BwmViewsStepSixPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BwmViewsStepSixPageRoutingModule {}
