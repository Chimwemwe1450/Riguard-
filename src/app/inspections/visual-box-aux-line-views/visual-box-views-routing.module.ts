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
    loadChildren: () => import('./visual-box-views-step-one/visual-box-views-step-one.module').then( m => m.VisualBoxAuxViewsStepOnePageModule)
  },
  {
    path: '2',
    loadChildren: () => import('./visual-box-views-step-two/visual-box-views-step-two.module').then( m => m.VisualBoxAuxViewsStepTwoPageModule)
  },
  {
    path: '3',
    loadChildren: () => import('./visual-box-views-step-three/visual-box-views-step-three.module').then( m => m.VisualBoxAuxViewsStepThreePageModule)
  }




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualBoxAuxViewsRoutingModule {}
