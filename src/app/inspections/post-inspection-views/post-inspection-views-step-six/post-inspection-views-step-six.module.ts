import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostInspectionViewsStepSixPageRoutingModule } from './post-inspection-views-step-six-routing.module';
import { HeaderInspectionsModule } from '../../shared/header-inspections/header-inspections.module';
import { FooterPostInspectionModule } from '../footer-post-inspection/footer-post-inspection.module';
import { ContentHeaderModule } from '../../shared/content-header/content-header.module';

import { PostInspectionViewsStepSixPage } from './post-inspection-views-step-six.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PostInspectionViewsStepSixPageRoutingModule,
    HeaderInspectionsModule,
    FooterPostInspectionModule,
    ContentHeaderModule
  ],
  declarations: [PostInspectionViewsStepSixPage]
})
export class PostInspectionViewsStepSixPageModule {}
