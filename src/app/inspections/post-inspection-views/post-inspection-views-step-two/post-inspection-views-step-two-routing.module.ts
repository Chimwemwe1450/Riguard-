import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostInspectionViewsStepTwoPage } from './post-inspection-views-step-two.page';

const routes: Routes = [
  {
    path: '',
    component: PostInspectionViewsStepTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostInspectionViewsStepTwoPageRoutingModule {}
