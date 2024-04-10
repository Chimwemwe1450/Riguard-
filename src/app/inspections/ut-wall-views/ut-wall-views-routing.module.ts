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
    loadChildren: () => import('./ut-wall-views-step-one/ut-wall-views-step-one.module').then( m => m.UtWallViewsStepOnePageModule)
  },
  {
    path: '2',
    loadChildren: () => import('./ut-wall-views-step-two/ut-wall-views-step-two.module').then( m => m.UtWallViewsStepTwoPageModule)
  },
  {
    path: '3',
    loadChildren: () => import('./ut-wall-views-step-three/ut-wall-views-step-three.module').then( m => m.UtWallViewsStepThreePageModule)
  },
  {
    path: '4',
    loadChildren: () => import('./ut-wall-views-step-four/ut-wall-views-step-four.module').then( m => m.UtWallViewsStepFourPageModule)
  },
  {
    path: '5',
    loadChildren: () => import('./ut-wall-views-step-five/ut-wall-views-step-five.module').then( m => m.UtWallViewsStepFivePageModule)
  },
  {
    path: '6',
    loadChildren: () => import('./ut-wall-views-step-six/ut-wall-views-step-six.module').then( m => m.UtWallViewsStepSixPageModule)
  }





];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UtWallViewsRoutingModule {}
