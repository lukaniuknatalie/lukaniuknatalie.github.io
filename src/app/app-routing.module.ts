import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'about-us',
    loadChildren: () => import('./about-us/about-us.module').then( m => m.AboutUsPageModule)
  },
  {
    path: 'revlab',
    loadChildren: () => import('./portfolio/revlab/revlab.module').then( m => m.RevlabPageModule)
  },
  {
    path: 'betonchart',
    loadChildren: () => import('./portfolio/betonchart/betonchart.module').then( m => m.BetonchartPageModule)
  },
  {
    path: 'tawazun',
    loadChildren: () => import('./portfolio/tawazun/tawazun.module').then( m => m.TawazunPageModule)
  },
  {
    path: 'memory',
    loadChildren: () => import('./portfolio/memory/memory.module').then( m => m.MemoryPageModule)
  },
  {
    path: 'moi',
    loadChildren: () => import('./portfolio/moi/moi.module').then( m => m.MoiPageModule)
  },
  {
    path: 'tti',
    loadChildren: () => import('./portfolio/tti/tti.module').then( m => m.TtiPageModule)
  },
  {
    path: 'rokoko',
    loadChildren: () => import('./portfolio/rokoko/rokoko.module').then( m => m.RokokoPageModule)
  },
  {
    path: 'intros',
    loadChildren: () => import('./portfolio/intros/intros.module').then( m => m.IntrosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
