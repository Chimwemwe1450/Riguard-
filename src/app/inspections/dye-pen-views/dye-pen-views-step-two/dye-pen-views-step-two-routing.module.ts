import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DyePenViewsStepTwoPage } from './dye-pen-views-step-two.page';

const routes: Routes = [
  {
    path: '',
    component: DyePenViewsStepTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DyePenViewsStepTwoPageRoutingModule {}
