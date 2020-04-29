import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DispneaIndexPage } from './dispnea-index.page';

const routes: Routes = [
  {
    path: '',
    component: DispneaIndexPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DispneaIndexPageRoutingModule {}
