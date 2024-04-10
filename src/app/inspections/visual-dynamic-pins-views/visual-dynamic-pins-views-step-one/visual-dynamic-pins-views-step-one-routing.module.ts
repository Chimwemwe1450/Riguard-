import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualDynamicPinsViewsStepOnePage } from './visual-dynamic-pins-views-step-one.page';

const routes: Routes = [
  {
    path: '',
    component: VisualDynamicPinsViewsStepOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualDynamicPinsViewsStepOnePageRoutingModule {}
