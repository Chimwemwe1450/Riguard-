import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EddyViewsStepTwoPage } from './eddy-views-step-two.page';

const routes: Routes = [
  {
    path: '',
    component: EddyViewsStepTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EddyViewsStepTwoPageRoutingModule {}
