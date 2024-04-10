import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManualViewsStepOnePage } from './manual-views-step-one.page';

const routes: Routes = [
  {
    path: '',
    component: ManualViewsStepOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManualViewsStepOnePageRoutingModule {}
