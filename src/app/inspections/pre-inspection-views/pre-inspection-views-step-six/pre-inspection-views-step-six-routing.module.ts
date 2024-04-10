import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreInspectionViewsStepSixPage } from './pre-inspection-views-step-six.page';

const routes: Routes = [
  {
    path: '',
    component: PreInspectionViewsStepSixPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreInspectionViewsStepSixPageRoutingModule {}
