import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DyePenViewsStepFivePage } from './dye-pen-views-step-five.page';

const routes: Routes = [
  {
    path: '',
    component: DyePenViewsStepFivePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DyePenViewsStepFivePageRoutingModule {}
