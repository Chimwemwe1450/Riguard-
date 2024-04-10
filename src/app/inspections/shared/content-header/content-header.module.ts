import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { ContentHeaderComponent } from './content-header.component';

import { StepProgressIndicatorComponent } from '../step-progress-indicator/step-progress-indicator.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [
    ContentHeaderComponent,
    StepProgressIndicatorComponent
  ],
  exports: [
    ContentHeaderComponent,
    StepProgressIndicatorComponent
  ]
})
export class ContentHeaderModule {}
