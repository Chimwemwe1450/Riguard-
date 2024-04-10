import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostInspectionViewsStepEightPage } from './post-inspection-views-step-eight.page';

const routes: Routes = [
  {
    path: '',
    component: PostInspectionViewsStepEightPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostInspectionViewsStepEightPageRoutingModule {}
