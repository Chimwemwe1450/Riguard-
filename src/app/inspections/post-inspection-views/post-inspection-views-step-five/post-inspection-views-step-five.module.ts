import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostInspectionViewsStepFivePageRoutingModule } from './post-inspection-views-step-five-routing.module';
import { HeaderInspectionsModule } from '../../shared/header-inspections/header-inspections.module';
import { FooterPostInspectionModule } from '../footer-post-inspection/footer-post-inspection.module';
import { ContentHeaderModule } from '../../shared/content-header/content-header.module';

import { PostInspectionViewsStepFivePage } from './post-inspection-views-step-five.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PostInspectionViewsStepFivePageRoutingModule,
    HeaderInspectionsModule,
    FooterPostInspectionModule,
    ContentHeaderModule
  ],
  declarations: [PostInspectionViewsStepFivePage]
})
export class PostInspectionViewsStepFivePageModule {}
