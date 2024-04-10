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
    loadChildren: () => import('./post-inspection-views-step-one/post-inspection-views-step-one.module')
        .then( m => m.PostInspectionViewsStepOnePageModule)
  },
  {
    path: '2',
    loadChildren: () => import('./post-inspection-views-step-two/post-inspection-views-step-two.module')
        .then( m => m.PostInspectionViewsStepTwoPageModule)
  },
  {
    path: '3',
    loadChildren: () => import('./post-inspection-views-step-three/post-inspection-views-step-three.module')
        .then( m => m.PostInspectionViewsStepThreePageModule)
  },
  {
    path: '4',
    loadChildren: () => import('./post-inspection-views-step-four/post-inspection-views-step-four.module')
        .then( m => m.PostInspectionViewsStepFourPageModule)
  },
  {
    path: '5',
    loadChildren: () => import('./post-inspection-views-step-five/post-inspection-views-step-five.module')
        .then( m => m.PostInspectionViewsStepFivePageModule)
  },
  {
    path: '6',
    loadChildren: () => import('./post-inspection-views-step-six/post-inspection-views-step-six.module')
        .then( m => m.PostInspectionViewsStepSixPageModule)
  },
  {
    path: '7',
    loadChildren: () => import('./post-inspection-views-step-seven/post-inspection-views-step-seven.module')
        .then( m => m.PostInspectionViewsStepSevenPageModule)
  },
  {
    path: '8',
    loadChildren: () => import('./post-inspection-views-step-eight/post-inspection-views-step-eight.module')
        .then( m => m.PostInspectionViewsStepEightPageModule)
  },
  {
    path: '9',
    loadChildren: () => import('./post-inspection-views-step-nine/post-inspection-views-step-nine.module')
        .then( m => m.PostInspectionViewsStepNinePageModule)
  },
  {
    path: '10',
    loadChildren: () => import('./post-inspection-views-step-ten/post-inspection-views-step-ten.module')
        .then( m => m.PostInspectionViewsStepTenPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostInspectionViewsRoutingModule {}
