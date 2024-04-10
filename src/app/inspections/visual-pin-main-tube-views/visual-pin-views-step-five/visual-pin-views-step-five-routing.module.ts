import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualPinViewsStepFivePage } from './visual-pin-views-step-five.page';

const routes: Routes = [
  {
    path: '',
    component: VisualPinViewsStepFivePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualPinViewsStepFivePageRoutingModule {}
