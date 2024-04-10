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
    loadChildren: () => import('./visual-dynamic-pins-views-step-one/visual-dynamic-pins-views-step-one.module')
        .then( m => m.VisualDynamicPinsViewsStepOnePageModule)
  },
  {
    path: '2',
    loadChildren: () => import('./visual-dynamic-pins-views-step-two/visual-dynamic-pins-views-step-two.module')
        .then( m => m.VisualDynamicPinsViewsStepTwoPageModule)
  },
  {
    path: '3',
    loadChildren: () => import('./visual-dynamic-pins-views-step-three/visual-dynamic-pins-views-step-three.module')
        .then( m => m.VisualDynamicPinsViewsStepThreePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualDynamicPinsViewsRoutingModule {}
