import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'detail-page',
    loadChildren: () => import('./detail-page/detail-page.module').then( m => m.DetailPagePageModule)
  },
  {
    path: 'temperature',
    loadChildren: () => import('./temperature/temperature.module').then( m => m.TemperaturePageModule)
  },
  {
    path: 'cough-severity',
    loadChildren: () => import('./cough-severity/cough-severity.module').then( m => m.CoughSeverityPageModule)
  },
  {
    path: 'dispnea-index',
    loadChildren: () => import('./dispnea-index/dispnea-index.module').then( m => m.DispneaIndexPageModule)
  },
  {
    path: 'disclaimer',
    loadChildren: () => import('./disclaimer/disclaimer.module').then( m => m.DisclaimerPageModule)
  },
  {
    path: 'agreement',
    loadChildren: () => import('./agreement/agreement.module').then( m => m.AgreementPageModule)
  },
  {
    path: 'submission-page',
    loadChildren: () => import('./submission-page/submission-page.module').then( m => m.SubmissionPagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
