import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualGenericPageRoutingModule } from './visual-generic-routing.module';
import { HeaderInspectionsModule } from '../../shared/header-inspections/header-inspections.module';
import { FooterVisualGenericModule } from '../footer-visual-generic/footer-visual-generic.module';
import { ContentHeaderModule } from '../../shared/content-header/content-header.module';

import { VisualGenericPage } from './visual-generic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    VisualGenericPageRoutingModule,
    HeaderInspectionsModule,
    FooterVisualGenericModule,
    ContentHeaderModule
  ],
  declarations: [VisualGenericPage]
})
export class VisualGenericPageModule {}
