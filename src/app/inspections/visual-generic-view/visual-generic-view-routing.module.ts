import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'generic',
    pathMatch: 'full'
  },
  {
    path: '1',
    loadChildren: () => import('./visual-generic/visual-generic.module').then( m => m.VisualGenericPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualGenericViewRoutingModule {}
