import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualBoxAuxViewsStepThreePage } from './visual-box-views-step-three.page';

const routes: Routes = [
  {
    path: '',
    component: VisualBoxAuxViewsStepThreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualBoxAuxViewsStepThreePageRoutingModule {}
