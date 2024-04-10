import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./inspections-list/inspections-list.module').then( m => m.InspectionsListPageModule)
  },
  {
    path: 'filter',
    loadChildren: () => import('./filter/filter.module').then( m => m.FilterPageModule)
  },
  {
    path: 'magnetic-particle',
    loadChildren: () => import('./magnetic-particle-views/magnetic-particle-views.module').then( m => m.MagneticParticleViewsModule)
  },
  {
    path: 'dimensional',
    loadChildren: () => import('./dimensional-views/dimensional-views-routing.module').then( m => m.DimensionalViewsRoutingModule)
  },
  {
    path: 'visual-pin-main',
    loadChildren: () => import('./visual-pin-main-tube-views/visual-pin-views-routing.module').then( m => m.VisualPinViewsRoutingModule)
  },
  {
    path: 'visual-box-main',
    loadChildren: () => import('./visual-box-main-tube-views/visual-box-views-routing.module').then( m => m.VisualBoxViewsRoutingModule)
  },
  {
    path: 'visual-box-aux',
    loadChildren: () => import('./visual-box-aux-line-views/visual-box-views-routing.module').then( m => m.VisualBoxAuxViewsRoutingModule)
  },
  {
    path: 'visual-pin-aux',
    loadChildren: () => import('./visual-pin-aux-line-views/visual-pin-aux-line-views-routing.module').then( m => m.VisualPinAuxViewsRoutingModule)
  },
  {
    path: 'visual-static',
    loadChildren: () => import('./visual-static-pins-views/visual-static-pins-views-routing.module')
        .then( m => m.VisualStaticPinsViewsRoutingModule)
  },
  {
    path: 'visual-dynamic',
    loadChildren: () => import('./visual-dynamic-pins-views/visual-dynamic-pins-views-routing.module')
        .then( m => m.VisualDynamicPinsViewsRoutingModule)
  },
  {
    path: 'visual',
    loadChildren: () => import('./visual-generic-view/visual-generic-view-routing.module').then( m => m.VisualGenericViewRoutingModule)
  },
  {
    path: 'dye-pen',
    loadChildren: () => import('./dye-pen-views/dye-pen-views-routing.module').then( m => m.DyePenViewsRoutingModule)
  },
  {
    path: 'ut-wall',
    loadChildren: () => import('./ut-wall-views/ut-wall-views-routing.module').then( m => m.UtWallViewsRoutingModule)
  },
  {
    path: 'pre-inspection',
    loadChildren: () => import('./pre-inspection-views/pre-inspection-views-routing.module').then( m => m.PreInspectionViewsRoutingModule)
  },
  {
    path: 'post-inspection',
    loadChildren: () => import('./post-inspection-views/post-inspection-views-routing.module')
        .then( m => m.PostInspectionViewsRoutingModule)
  },
  {
    path: 'bwm',
    loadChildren: () => import('./bwm-views/bwm-views-routing.module').then( m => m.BwmViewsRoutingModule)
  },
  {
    path: 'eddy',
    loadChildren: () => import('./eddy-views/eddy-views-routing.module').then( m => m.EddyViewsRoutingModule)
  },
  {
    path: 'manual',
    loadChildren: () => import('./manual-views/manual-views-routing.module').then( m => m.ManualViewsRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InspectionsRoutingModule {}
