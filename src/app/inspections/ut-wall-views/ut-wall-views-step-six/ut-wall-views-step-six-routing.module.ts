import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UtWallViewsStepSixPage } from './ut-wall-views-step-six.page';

const routes: Routes = [
  {
    path: '',
    component: UtWallViewsStepSixPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UtWallViewsStepSixPageRoutingModule {}
