import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreInspectionViewsStepFourPage } from './pre-inspection-views-step-four.page';

const routes: Routes = [
  {
    path: '',
    component: PreInspectionViewsStepFourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreInspectionViewsStepFourPageRoutingModule {}
