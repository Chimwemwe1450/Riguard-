import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualStaticPinsViewsStepTwoPage } from './visual-static-pins-views-step-two.page';

const routes: Routes = [
  {
    path: '',
    component: VisualStaticPinsViewsStepTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualStaticPinsViewsStepTwoPageRoutingModule {}
