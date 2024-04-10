import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EddyViewsStepOnePage } from './eddy-views-step-one.page';

const routes: Routes = [
  {
    path: '',
    component: EddyViewsStepOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EddyViewsStepOnePageRoutingModule {}
