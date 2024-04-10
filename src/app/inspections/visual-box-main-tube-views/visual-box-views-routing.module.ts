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
    loadChildren: () => import('./visual-box-views-step-one/visual-box-views-step-one.module').then( m => m.VisualBoxViewsStepOnePageModule)
  },
  {
    path: '2',
    loadChildren: () => import('./visual-box-views-step-two/visual-box-views-step-two.module').then( m => m.VisualBoxViewsStepTwoPageModule)
  },
  {
    path: '3',
    loadChildren: () => import('./visual-box-views-step-three/visual-box-views-step-three.module')
        .then( m => m.VisualBoxViewsStepThreePageModule)
  },
  {
    path: '4',
    loadChildren: () => import('./visual-box-views-step-four/visual-box-views-step-four.module')
        .then( m => m.VisualBoxViewsStepFourPageModule)
  },
  {
    path: '5',
    loadChildren: () => import('./visual-box-views-step-five/visual-box-views-step-five.module')
        .then( m => m.VisualBoxViewsStepFivePageModule)
  }




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualBoxViewsRoutingModule {}
