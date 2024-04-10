import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualPinViewsStepOnePage } from './visual-pin-views-step-one.page';

const routes: Routes = [
  {
    path: '',
    component: VisualPinViewsStepOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualPinViewsStepOnePageRoutingModule {}
