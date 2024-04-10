import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UtWallViewsStepSixPageRoutingModule } from './ut-wall-views-step-six-routing.module';
import { HeaderInspectionsModule } from '../../shared/header-inspections/header-inspections.module';
import { FooterUtWallModule } from '../footer-ut-wall/footer-ut-wall.module';
import { ContentHeaderModule } from '../../shared/content-header/content-header.module';

import { UtWallViewsStepSixPage } from './ut-wall-views-step-six.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UtWallViewsStepSixPageRoutingModule,
    HeaderInspectionsModule,
    FooterUtWallModule,
    ContentHeaderModule
  ],
  declarations: [UtWallViewsStepSixPage]
})
export class UtWallViewsStepSixPageModule {}
