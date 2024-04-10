import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EddyViewsStepFourPage } from './eddy-views-step-four.page';

const routes: Routes = [
  {
    path: '',
    component: EddyViewsStepFourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EddyViewsStepFourPageRoutingModule {}
