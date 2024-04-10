import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InspectionsListPageRoutingModule } from './inspections-list-routing.module';
import { FooterInspectionsListModule } from './footer-inspections-list/footer-inspections-list.module';

import { InspectionsListPage } from './inspections-list.page';
import { ProfileMenuComponent } from './profile-menu/profile-menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InspectionsListPageRoutingModule,
    FooterInspectionsListModule
  ],
  declarations: [
    InspectionsListPage,
    ProfileMenuComponent
  ]
})
export class InspectionsListPageModule {}
