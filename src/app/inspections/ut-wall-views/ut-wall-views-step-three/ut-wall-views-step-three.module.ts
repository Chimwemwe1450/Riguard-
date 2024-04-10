import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UtWallViewsStepThreePageRoutingModule } from './ut-wall-views-step-three-routing.module';
import { HeaderInspectionsModule } from '../../shared/header-inspections/header-inspections.module';
import { FooterUtWallModule } from '../footer-ut-wall/footer-ut-wall.module';
import { ContentHeaderModule } from '../../shared/content-header/content-header.module';

import { UtWallViewsStepThreePage } from './ut-wall-views-step-three.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UtWallViewsStepThreePageRoutingModule,
    HeaderInspectionsModule,
    FooterUtWallModule,
    ContentHeaderModule
  ],
  declarations: [UtWallViewsStepThreePage]
})
export class UtWallViewsStepThreePageModule {}
