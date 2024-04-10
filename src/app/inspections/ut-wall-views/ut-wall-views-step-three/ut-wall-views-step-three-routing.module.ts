import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UtWallViewsStepThreePage } from './ut-wall-views-step-three.page';

const routes: Routes = [
  {
    path: '',
    component: UtWallViewsStepThreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UtWallViewsStepThreePageRoutingModule {}
