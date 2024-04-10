import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DyePenViewsStepSixPage } from './dye-pen-views-step-six.page';

const routes: Routes = [
  {
    path: '',
    component: DyePenViewsStepSixPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DyePenViewsStepSixPageRoutingModule {}
