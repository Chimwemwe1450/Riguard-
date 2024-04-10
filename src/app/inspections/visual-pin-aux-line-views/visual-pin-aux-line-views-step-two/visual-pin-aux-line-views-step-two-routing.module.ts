import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualPinAuxViewsStepTwoPage } from './visual-pin-aux-line-views-step-two.page';

const routes: Routes = [
  {
    path: '',
    component: VisualPinAuxViewsStepTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualPinAuxViewsStepTwoPageRoutingModule {}
