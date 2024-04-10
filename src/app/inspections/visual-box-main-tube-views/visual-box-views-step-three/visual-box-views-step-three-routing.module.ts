import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualBoxViewsStepThreePage } from './visual-box-views-step-three.page';

const routes: Routes = [
  {
    path: '',
    component: VisualBoxViewsStepThreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualBoxViewsStepThreePageRoutingModule {}
