import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualDynamicPinsViewsStepTwoPage } from './visual-dynamic-pins-views-step-two.page';

const routes: Routes = [
  {
    path: '',
    component: VisualDynamicPinsViewsStepTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualDynamicPinsViewsStepTwoPageRoutingModule {}
