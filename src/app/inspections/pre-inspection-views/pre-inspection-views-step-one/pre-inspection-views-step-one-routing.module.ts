import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreInspectionViewsStepOnePage } from './pre-inspection-views-step-one.page';

const routes: Routes = [
  {
    path: '',
    component: PreInspectionViewsStepOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreInspectionViewsStepOnePageRoutingModule {}
