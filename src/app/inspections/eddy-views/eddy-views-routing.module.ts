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
    loadChildren: () => import('./eddy-views-step-one/eddy-views-step-one.module').then( m => m.EddyViewsStepOnePageModule)
  },
  {
    path: '2',
    loadChildren: () => import('./eddy-views-step-two/eddy-views-step-two.module').then( m => m.EddyViewsStepTwoPageModule)
  },
  {
    path: '3',
    loadChildren: () => import('./eddy-views-step-three/eddy-views-step-three.module').then( m => m.EddyViewsStepThreePageModule)
  },
  {
    path: '4',
    loadChildren: () => import('./eddy-views-step-four/eddy-views-step-four.module').then( m => m.EddyViewsStepFourPageModule)
  }




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EddyViewsRoutingModule {}
