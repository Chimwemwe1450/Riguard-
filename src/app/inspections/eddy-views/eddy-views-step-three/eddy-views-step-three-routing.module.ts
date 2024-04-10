import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EddyViewsStepThreePage } from './eddy-views-step-three.page';

const routes: Routes = [
  {
    path: '',
    component: EddyViewsStepThreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EddyViewsStepThreePageRoutingModule {}
