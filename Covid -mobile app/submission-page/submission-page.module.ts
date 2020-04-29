import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubmissionPagePageRoutingModule } from './submission-page-routing.module';

import { SubmissionPagePage } from './submission-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubmissionPagePageRoutingModule
  ],
  declarations: [SubmissionPagePage]
})
export class SubmissionPagePageModule {}
