import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostInspectionViewsStepThreePage } from './post-inspection-views-step-three.page';

const routes: Routes = [
  {
    path: '',
    component: PostInspectionViewsStepThreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostInspectionViewsStepThreePageRoutingModule {}
