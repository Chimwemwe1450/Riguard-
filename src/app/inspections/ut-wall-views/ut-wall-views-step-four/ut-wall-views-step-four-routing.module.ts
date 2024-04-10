import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UtWallViewsStepFourPage } from './ut-wall-views-step-four.page';

const routes: Routes = [
  {
    path: '',
    component: UtWallViewsStepFourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UtWallViewsStepFourPageRoutingModule {}
