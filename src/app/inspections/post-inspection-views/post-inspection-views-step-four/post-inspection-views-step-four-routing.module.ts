import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostInspectionViewsStepFourPage } from './post-inspection-views-step-four.page';

const routes: Routes = [
  {
    path: '',
    component: PostInspectionViewsStepFourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostInspectionViewsStepFourPageRoutingModule {}
