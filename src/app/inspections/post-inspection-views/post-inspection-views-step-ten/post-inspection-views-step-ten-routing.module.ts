import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostInspectionViewsStepTenPage } from './post-inspection-views-step-ten.page';

const routes: Routes = [
  {
    path: '',
    component: PostInspectionViewsStepTenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostInspectionViewsStepTenPageRoutingModule {}
