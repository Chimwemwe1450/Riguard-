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
    loadChildren: () => import('./dye-pen-views-step-one/dye-pen-views-step-one.module').then( m => m.DyePenViewsStepOnePageModule)
  },
  {
    path: '2',
    loadChildren: () => import('./dye-pen-views-step-two/dye-pen-views-step-two.module').then( m => m.DyePenViewsStepTwoPageModule)
  },
  {
    path: '3',
    loadChildren: () => import('./dye-pen-views-step-three/dye-pen-views-step-three.module').then( m => m.DyePenViewsStepThreePageModule)
  },
  {
    path: '4',
    loadChildren: () => import('./dye-pen-views-step-four/dye-pen-views-step-four.module').then( m => m.DyePenViewsStepFourPageModule)
  },
  {
    path: '5',
    loadChildren: () => import('./dye-pen-views-step-five/dye-pen-views-step-five.module').then( m => m.DyePenViewsStepFivePageModule)
  },
  {
    path: '6',
    loadChildren: () => import('./dye-pen-views-step-six/dye-pen-views-step-six.module').then( m => m.DyePenViewsStepSixPageModule)
  }





];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DyePenViewsRoutingModule {}
