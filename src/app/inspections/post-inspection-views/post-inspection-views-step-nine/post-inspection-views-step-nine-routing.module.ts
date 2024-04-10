import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostInspectionViewsStepNinePage } from './post-inspection-views-step-nine.page';

const routes: Routes = [
  {
    path: '',
    component: PostInspectionViewsStepNinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostInspectionViewsStepNinePageRoutingModule {}
