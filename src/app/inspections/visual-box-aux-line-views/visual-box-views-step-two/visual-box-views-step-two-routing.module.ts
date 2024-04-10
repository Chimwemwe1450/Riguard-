import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualBoxAuxViewsStepTwoPage } from './visual-box-views-step-two.page';

const routes: Routes = [
  {
    path: '',
    component: VisualBoxAuxViewsStepTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualBoxAuxViewsStepTwoPageRoutingModule {}
