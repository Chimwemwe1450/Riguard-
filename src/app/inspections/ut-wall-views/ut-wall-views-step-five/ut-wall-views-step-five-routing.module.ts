import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UtWallViewsStepFivePage } from './ut-wall-views-step-five.page';

const routes: Routes = [
  {
    path: '',
    component: UtWallViewsStepFivePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UtWallViewsStepFivePageRoutingModule {}
