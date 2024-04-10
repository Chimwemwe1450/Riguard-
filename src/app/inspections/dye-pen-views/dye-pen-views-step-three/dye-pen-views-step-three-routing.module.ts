import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DyePenViewsStepThreePage } from './dye-pen-views-step-three.page';

const routes: Routes = [
  {
    path: '',
    component: DyePenViewsStepThreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DyePenViewsStepThreePageRoutingModule {}
