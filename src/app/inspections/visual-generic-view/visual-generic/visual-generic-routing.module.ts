import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualGenericPage } from './visual-generic.page';

const routes: Routes = [
  {
    path: '',
    component: VisualGenericPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualGenericPageRoutingModule {}
