import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreInspectionViewsStepTwoPage } from './pre-inspection-views-step-two.page';

const routes: Routes = [
  {
    path: '',
    component: PreInspectionViewsStepTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreInspectionViewsStepTwoPageRoutingModule {}
