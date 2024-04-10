import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostInspectionViewsStepSevenPageRoutingModule } from './post-inspection-views-step-seven-routing.module';
import { HeaderInspectionsModule } from '../../shared/header-inspections/header-inspections.module';
import { FooterPostInspectionModule } from '../footer-post-inspection/footer-post-inspection.module';
import { ContentHeaderModule } from '../../shared/content-header/content-header.module';

import { PostInspectionViewsStepSevenPage } from './post-inspection-views-step-seven.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PostInspectionViewsStepSevenPageRoutingModule,
    HeaderInspectionsModule,
    FooterPostInspectionModule,
    ContentHeaderModule
  ],
  declarations: [PostInspectionViewsStepSevenPage]
})
export class PostInspectionViewsStepSevenPageModule {}
