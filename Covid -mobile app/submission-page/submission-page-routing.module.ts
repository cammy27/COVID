import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubmissionPagePage } from './submission-page.page';

const routes: Routes = [
  {
    path: '',
    component: SubmissionPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubmissionPagePageRoutingModule {}
