import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BwmViewsStepNinePage } from './bwm-views-step-nine.page';

const routes: Routes = [
  {
    path: '',
    component: BwmViewsStepNinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BwmViewsStepNinePageRoutingModule {}
