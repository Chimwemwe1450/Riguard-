import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostInspectionViewsStepFivePage } from './post-inspection-views-step-five.page';

const routes: Routes = [
  {
    path: '',
    component: PostInspectionViewsStepFivePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostInspectionViewsStepFivePageRoutingModule {}
