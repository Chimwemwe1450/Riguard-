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
    loadChildren: () => import('./magnetic-particle-step-one/magnetic-particle-step-one.module')
        .then( m => m.MagneticParticleStepOnePageModule)
  },
  {
    path: '2',
    loadChildren: () => import('./magnetic-particle-step-two/magnetic-particle-step-two.module')
        .then( m => m.MagneticParticleStepTwoPageModule)
  },
  {
    path: '3',
    loadChildren: () => import('./magnetic-particle-step-three/magnetic-particle-step-three.module')
        .then( m => m.MagneticParticleStepThreePageModule)
  },
  {
    path: '4',
    loadChildren: () => import('./magnetic-particle-step-four/magnetic-particle-step-four.module')
        .then( m => m.MagneticParticleStepFourPageModule)
  },
  {
    path: '5',
    loadChildren: () => import('./magnetic-particle-step-five/magnetic-particle-step-five.module')
        .then( m => m.MagneticParticleStepFivePageModule)
  },
  {
    path: '6',
    loadChildren: () => import('./magnetic-particle-step-six/magnetic-particle-step-six.module')
        .then( m => m.MagneticParticleStepSixPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MagneticParticleViewsRoutingModule {}
