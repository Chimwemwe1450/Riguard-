import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualBoxViewsStepOnePage } from './visual-box-views-step-one.page';

const routes: Routes = [
  {
    path: '',
    component: VisualBoxViewsStepOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualBoxViewsStepOnePageRoutingModule {}
