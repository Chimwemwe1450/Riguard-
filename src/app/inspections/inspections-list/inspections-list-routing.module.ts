import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InspectionsListPage } from './inspections-list.page';

const routes: Routes = [
  {
    path: '',
    component: InspectionsListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InspectionsListPageRoutingModule {}
