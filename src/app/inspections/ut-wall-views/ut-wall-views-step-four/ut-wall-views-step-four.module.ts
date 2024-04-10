import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UtWallViewsStepFourPageRoutingModule } from './ut-wall-views-step-four-routing.module';
import { HeaderInspectionsModule } from '../../shared/header-inspections/header-inspections.module';
import { FooterUtWallModule } from '../footer-ut-wall/footer-ut-wall.module';
import { ContentHeaderModule } from '../../shared/content-header/content-header.module';

import { UtWallViewsStepFourPage } from './ut-wall-views-step-four.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UtWallViewsStepFourPageRoutingModule,
    HeaderInspectionsModule,
    FooterUtWallModule,
    ContentHeaderModule
  ],
  declarations: [UtWallViewsStepFourPage]
})
export class UtWallViewsStepFourPageModule {}
