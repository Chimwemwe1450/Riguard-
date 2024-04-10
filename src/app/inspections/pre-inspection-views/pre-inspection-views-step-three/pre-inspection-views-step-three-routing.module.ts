import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreInspectionViewsStepThreePage } from './pre-inspection-views-step-three.page';

const routes: Routes = [
  {
    path: '',
    component: PreInspectionViewsStepThreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreInspectionViewsStepThreePageRoutingModule {}
