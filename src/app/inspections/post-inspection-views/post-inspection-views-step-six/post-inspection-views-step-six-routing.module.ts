import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostInspectionViewsStepSixPage } from './post-inspection-views-step-six.page';

const routes: Routes = [
  {
    path: '',
    component: PostInspectionViewsStepSixPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostInspectionViewsStepSixPageRoutingModule {}
