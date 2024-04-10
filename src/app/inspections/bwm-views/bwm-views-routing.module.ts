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
    loadChildren: () => import('./bwm-views-step-one/bwm-views-step-one.module').then( m => m.BwmViewsStepOnePageModule)
  },
  {
    path: '2',
    loadChildren: () => import('./bwm-views-step-two/bwm-views-step-two.module').then( m => m.BwmViewsStepTwoPageModule)
  },
  {
    path: '3',
    loadChildren: () => import('./bwm-views-step-three/bwm-views-step-three.module').then( m => m.BwmViewsStepThreePageModule)
  },
  {
    path: '4',
    loadChildren: () => import('./bwm-views-step-four/bwm-views-step-four.module').then( m => m.BwmViewsStepFourPageModule)
  },
  {
    path: '5',
    loadChildren: () => import('./bwm-views-step-five/bwm-views-step-five.module').then( m => m.BwmViewsStepFivePageModule)
  },
  {
    path: '6',
    loadChildren: () => import('./bwm-views-step-six/bwm-views-step-six.module').then( m => m.BwmViewsStepSixPageModule)
  },
  {
    path: '7',
    loadChildren: () => import('./bwm-views-step-seven/bwm-views-step-seven.module').then( m => m.BwmViewsStepSevenPageModule)
  },
  {
    path: '8',
    loadChildren: () => import('./bwm-views-step-eight/bwm-views-step-eight.module').then( m => m.BwmViewsStepEightPageModule)
  },
  {
    path: '9',
    loadChildren: () => import('./bwm-views-step-nine/bwm-views-step-nine.module').then( m => m.BwmViewsStepNinePageModule)
  }









];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BwmViewsRoutingModule {}
