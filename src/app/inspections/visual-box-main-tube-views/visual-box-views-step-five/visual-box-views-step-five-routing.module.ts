import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualBoxViewsStepFivePage } from './visual-box-views-step-five.page';

const routes: Routes = [
  {
    path: '',
    component: VisualBoxViewsStepFivePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualBoxViewsStepFivePageRoutingModule {}
