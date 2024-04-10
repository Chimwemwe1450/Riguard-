import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostInspectionViewsStepOnePageRoutingModule } from './post-inspection-views-step-one-routing.module';
import { HeaderInspectionsModule } from '../../shared/header-inspections/header-inspections.module';
import { FooterPostInspectionModule } from '../footer-post-inspection/footer-post-inspection.module';
import { ContentHeaderModule } from '../../shared/content-header/content-header.module';

import { PostInspectionViewsStepOnePage } from './post-inspection-views-step-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PostInspectionViewsStepOnePageRoutingModule,
    HeaderInspectionsModule,
    FooterPostInspectionModule,
    ContentHeaderModule
  ],
  declarations: [PostInspectionViewsStepOnePage]
})
export class PostInspectionViewsStepOnePageModule {}
