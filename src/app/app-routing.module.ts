import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./pages/sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'catalogue',
    loadChildren: () => import('./pages/catalogue/catalogue.module').then( m => m.CataloguePageModule)
  },
  {
    path: 'shortlist',
    loadChildren: () => import('./pages/shortlist/shortlist.module').then( m => m.ShortlistPageModule)
  },
  {
    path: 'downloads',
    loadChildren: () => import('./pages/downloads/downloads.module').then( m => m.DownloadsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'catalogue1',
    loadChildren: () => import('./pages/catalogue1/catalogue1.module').then( m => m.Catalogue1PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
