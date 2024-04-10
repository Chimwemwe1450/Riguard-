import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostInspectionViewsStepSevenPage } from './post-inspection-views-step-seven.page';

const routes: Routes = [
  {
    path: '',
    component: PostInspectionViewsStepSevenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostInspectionViewsStepSevenPageRoutingModule {}
