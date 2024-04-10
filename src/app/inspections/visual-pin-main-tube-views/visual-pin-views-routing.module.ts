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
    loadChildren: () => import('./visual-pin-views-step-one/visual-pin-views-step-one.module').then( m => m.VisualPinViewsStepOnePageModule)
  },
  {
    path: '2',
    loadChildren: () => import('./visual-pin-views-step-two/visual-pin-views-step-two.module').then( m => m.VisualPinViewsStepTwoPageModule)
  },
  {
    path: '3',
    loadChildren: () => import('./visual-pin-views-step-three/visual-pin-views-step-three.module')
        .then( m => m.VisualPinViewsStepThreePageModule)
  },
  {
    path: '4',
    loadChildren: () => import('./visual-pin-views-step-four/visual-pin-views-step-four.module')
        .then( m => m.VisualPinViewsStepFourPageModule)
  },
  {
    path: '5',
    loadChildren: () => import('./visual-pin-views-step-five/visual-pin-views-step-five.module')
        .then( m => m.VisualPinViewsStepFivePageModule)
  }




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualPinViewsRoutingModule {}
