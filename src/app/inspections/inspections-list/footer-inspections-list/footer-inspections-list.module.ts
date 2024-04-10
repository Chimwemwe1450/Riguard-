import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { FooterInspectionsListComponent } from './footer-inspections-list.component';
import { ProgressIndicatorComponent } from '../../shared/progress-indicator/progress-indicator.component';
import { SyncReportComponent } from '../sync-report/sync-report.component';

@NgModule({
  declarations: [
    FooterInspectionsListComponent,
    ProgressIndicatorComponent,
    SyncReportComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    FooterInspectionsListComponent,
    ProgressIndicatorComponent
  ]
})
export class FooterInspectionsListModule { }
