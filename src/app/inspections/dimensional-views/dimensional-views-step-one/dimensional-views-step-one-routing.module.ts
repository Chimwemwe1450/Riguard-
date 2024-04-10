import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DimensionalViewsStepOnePage } from './dimensional-views-step-one.page';

const routes: Routes = [
  {
    path: '',
    component: DimensionalViewsStepOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DimensionalViewsStepOnePageRoutingModule {}
