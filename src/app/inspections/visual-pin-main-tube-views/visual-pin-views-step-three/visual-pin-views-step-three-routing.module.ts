import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualPinViewsStepThreePage } from './visual-pin-views-step-three.page';

const routes: Routes = [
  {
    path: '',
    component: VisualPinViewsStepThreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualPinViewsStepThreePageRoutingModule {}
