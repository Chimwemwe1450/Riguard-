import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UtWallViewsStepTwoPage } from './ut-wall-views-step-two.page';

const routes: Routes = [
  {
    path: '',
    component: UtWallViewsStepTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UtWallViewsStepTwoPageRoutingModule {}
