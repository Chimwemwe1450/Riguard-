import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualBoxAuxViewsStepOnePage } from './visual-box-views-step-one.page';

const routes: Routes = [
  {
    path: '',
    component: VisualBoxAuxViewsStepOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualBoxAuxViewsStepOnePageRoutingModule {}
