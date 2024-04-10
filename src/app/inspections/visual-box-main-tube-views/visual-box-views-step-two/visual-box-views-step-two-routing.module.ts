import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualBoxViewsStepTwoPage } from './visual-box-views-step-two.page';

const routes: Routes = [
  {
    path: '',
    component: VisualBoxViewsStepTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualBoxViewsStepTwoPageRoutingModule {}
