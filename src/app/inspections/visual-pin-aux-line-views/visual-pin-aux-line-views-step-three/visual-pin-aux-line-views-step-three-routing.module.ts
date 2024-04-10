import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualPinAuxViewsStepThreePage } from './visual-pin-aux-line-views-step-three.page';

const routes: Routes = [
  {
    path: '',
    component: VisualPinAuxViewsStepThreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualPinAuxViewsStepThreePageRoutingModule {}
