import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostInspectionViewsStepOnePage } from './post-inspection-views-step-one.page';

const routes: Routes = [
  {
    path: '',
    component: PostInspectionViewsStepOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostInspectionViewsStepOnePageRoutingModule {}
