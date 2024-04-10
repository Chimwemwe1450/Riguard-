import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualPinViewsStepFourPage } from './visual-pin-views-step-four.page';

const routes: Routes = [
  {
    path: '',
    component: VisualPinViewsStepFourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualPinViewsStepFourPageRoutingModule {}
