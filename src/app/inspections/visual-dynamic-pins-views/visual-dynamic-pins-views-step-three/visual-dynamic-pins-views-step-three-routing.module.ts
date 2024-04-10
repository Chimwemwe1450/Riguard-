import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualDynamicPinsViewsStepThreePage } from './visual-dynamic-pins-views-step-three.page';

const routes: Routes = [
  {
    path: '',
    component: VisualDynamicPinsViewsStepThreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualDynamicPinsViewsStepThreePageRoutingModule {}
