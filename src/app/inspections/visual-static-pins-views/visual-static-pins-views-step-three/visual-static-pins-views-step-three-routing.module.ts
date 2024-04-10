import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualStaticPinsViewsStepThreePage } from './visual-static-pins-views-step-three.page';

const routes: Routes = [
  {
    path: '',
    component: VisualStaticPinsViewsStepThreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualStaticPinsViewsStepThreePageRoutingModule {}
