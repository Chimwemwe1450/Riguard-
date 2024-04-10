import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostInspectionViewsStepNinePageRoutingModule } from './post-inspection-views-step-nine-routing.module';
import { HeaderInspectionsModule } from '../../shared/header-inspections/header-inspections.module';
import { FooterPostInspectionModule } from '../footer-post-inspection/footer-post-inspection.module';
import { ContentHeaderModule } from '../../shared/content-header/content-header.module';

import { PostInspectionViewsStepNinePage } from './post-inspection-views-step-nine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PostInspectionViewsStepNinePageRoutingModule,
    HeaderInspectionsModule,
    FooterPostInspectionModule,
    ContentHeaderModule
  ],
  declarations: [PostInspectionViewsStepNinePage]
})
export class PostInspectionViewsStepNinePageModule {}
