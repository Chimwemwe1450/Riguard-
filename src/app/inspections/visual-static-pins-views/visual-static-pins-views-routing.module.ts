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
    loadChildren: () => import('./visual-static-pins-views-step-one/visual-static-pins-views-step-one.module')
        .then( m => m.VisualStaticPinsViewsStepOnePageModule)
  },
  {
    path: '2',
    loadChildren: () => import('./visual-static-pins-views-step-two/visual-static-pins-views-step-two.module')
        .then( m => m.VisualStaticPinsViewsStepTwoPageModule)
  },
  {
    path: '3',
    loadChildren: () => import('./visual-static-pins-views-step-three/visual-static-pins-views-step-three.module')
        .then( m => m.VisualStaticPinsViewsStepThreePageModule)
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualStaticPinsViewsRoutingModule {}
