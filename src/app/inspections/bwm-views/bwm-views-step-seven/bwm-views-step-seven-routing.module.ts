import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BwmViewsStepSevenPage } from './bwm-views-step-seven.page';

const routes: Routes = [
  {
    path: '',
    component: BwmViewsStepSevenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BwmViewsStepSevenPageRoutingModule {}
