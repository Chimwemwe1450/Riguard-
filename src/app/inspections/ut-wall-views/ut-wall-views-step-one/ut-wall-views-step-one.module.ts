import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UtWallViewsStepOnePageRoutingModule } from './ut-wall-views-step-one-routing.module';
import { HeaderInspectionsModule } from '../../shared/header-inspections/header-inspections.module';
import { FooterUtWallModule } from '../footer-ut-wall/footer-ut-wall.module';
import { ContentHeaderModule } from '../../shared/content-header/content-header.module';

import { UtWallViewsStepOnePage } from './ut-wall-views-step-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UtWallViewsStepOnePageRoutingModule,
    HeaderInspectionsModule,
    FooterUtWallModule,
    ContentHeaderModule
  ],
  declarations: [UtWallViewsStepOnePage]
})
export class UtWallViewsStepOnePageModule {}
