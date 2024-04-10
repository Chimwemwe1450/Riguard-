import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from './shared/services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inspections',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inspections',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./inspections/inspections.module').then( m => m.InspectionsModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./auth/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./auth/change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
