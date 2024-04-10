import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualStaticPinsViewsStepOnePage } from './visual-static-pins-views-step-one.page';

const routes: Routes = [
  {
    path: '',
    component: VisualStaticPinsViewsStepOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualStaticPinsViewsStepOnePageRoutingModule {}
