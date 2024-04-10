import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UtWallViewsStepFivePageRoutingModule } from './ut-wall-views-step-five-routing.module';
import { HeaderInspectionsModule } from '../../shared/header-inspections/header-inspections.module';
import { FooterUtWallModule } from '../footer-ut-wall/footer-ut-wall.module';
import { ContentHeaderModule } from '../../shared/content-header/content-header.module';

import { UtWallViewsStepFivePage } from './ut-wall-views-step-five.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UtWallViewsStepFivePageRoutingModule,
    HeaderInspectionsModule,
    FooterUtWallModule,
    ContentHeaderModule
  ],
  declarations: [UtWallViewsStepFivePage]
})
export class UtWallViewsStepFivePageModule {}
