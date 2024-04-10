import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DyePenViewsStepFourPage } from './dye-pen-views-step-four.page';

const routes: Routes = [
  {
    path: '',
    component: DyePenViewsStepFourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DyePenViewsStepFourPageRoutingModule {}
