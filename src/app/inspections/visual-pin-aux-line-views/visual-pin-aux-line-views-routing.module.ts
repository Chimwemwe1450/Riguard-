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
    loadChildren: () => import('./visual-pin-aux-line-views-step-one/visual-pin-aux-line-views-step-one.module')
      .then(m => m.VisualPinAuxViewsStepOnePageModule)
  },
  {
    path: '2',
    loadChildren: () => import('./visual-pin-aux-line-views-step-two/visual-pin-aux-line-views-step-two.module')
      .then(m => m.VisualPinAuxViewsStepTwoPageModule)
  },
  {
    path: '3',
    loadChildren: () => import('./visual-pin-aux-line-views-step-three/visual-pin-aux-line-views-step-three.module')
      .then(m => m.VisualPinAuxViewsStepThreePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualPinAuxViewsRoutingModule { }
