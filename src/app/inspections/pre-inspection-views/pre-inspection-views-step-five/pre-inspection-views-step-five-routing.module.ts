import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreInspectionViewsStepFivePage } from './pre-inspection-views-step-five.page';

const routes: Routes = [
  {
    path: '',
    component: PreInspectionViewsStepFivePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreInspectionViewsStepFivePageRoutingModule {}
