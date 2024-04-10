import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '1',
    pathMatch: 'full'
  },
  {
    path: '1',
    loadChildren: () => import('./dimensional-views-step-one/dimensional-views-step-one.module')
        .then( m => m.DimensionalViewsStepOnePageModule)
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DimensionalViewsRoutingModule {}
