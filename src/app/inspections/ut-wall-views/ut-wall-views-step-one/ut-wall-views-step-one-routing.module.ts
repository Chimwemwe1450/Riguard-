import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UtWallViewsStepOnePage } from './ut-wall-views-step-one.page';

const routes: Routes = [
  {
    path: '',
    component: UtWallViewsStepOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UtWallViewsStepOnePageRoutingModule {}
