import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DispneaIndexPageRoutingModule } from './dispnea-index-routing.module';

import { DispneaIndexPage } from './dispnea-index.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DispneaIndexPageRoutingModule
  ],
  declarations: [DispneaIndexPage]
})
export class DispneaIndexPageModule {}
