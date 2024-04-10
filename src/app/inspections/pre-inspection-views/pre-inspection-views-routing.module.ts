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
    loadChildren: () => import('./pre-inspection-views-step-one/pre-inspection-views-step-one.module')
        .then( m => m.PreInspectionViewsStepOnePageModule)
  },
  {
    path: '2',
    loadChildren: () => import('./pre-inspection-views-step-two/pre-inspection-views-step-two.module')
        .then( m => m.PreInspectionViewsStepTwoPageModule)
  },
  {
    path: '3',
    loadChildren: () => import('./pre-inspection-views-step-three/pre-inspection-views-step-three.module')
        .then( m => m.PreInspectionViewsStepThreePageModule)
  },
  {
    path: '4',
    loadChildren: () => import('./pre-inspection-views-step-four/pre-inspection-views-step-four.module')
        .then( m => m.PreInspectionViewsStepFourPageModule)
  },
  {
    path: '5',
    loadChildren: () => import('./pre-inspection-views-step-five/pre-inspection-views-step-five.module')
        .then( m => m.PreInspectionViewsStepFivePageModule)
  },
  {
    path: '6',
    loadChildren: () => import('./pre-inspection-views-step-six/pre-inspection-views-step-six.module')
        .then( m => m.PreInspectionViewsStepSixPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreInspectionViewsRoutingModule {}
