import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },

  {
    path: 'alert',
    loadChildren: () =>
      import('./pages/alert-pg/alert-pg.module').then(
        (m) => m.AlertPgPageModule
      ),
  },
  {
    path: 'card',
    loadChildren: () =>
      import('./pages/card-pg/card-pg.module').then((m) => m.CardPgPageModule),
  },
  {
    path: 'infinite',
    loadChildren: () =>
      import('./pages/infinite-pg/infinite-pg.module').then(
        (m) => m.InfinitePgPageModule
      ),
  },
  {
    path: 'loading',
    loadChildren: () =>
      import('./pages/loading-pg/loading-pg.module').then(
        (m) => m.LoadingPgPageModule
      ),
  },
  {
    path: 'fab',
    loadChildren: () =>
      import('./pages/fab-pg/fab-pg.module').then((m) => m.FabPgPageModule),
  },
  {
    path: 'grid',
    loadChildren: () =>
      import('./pages/grid-pg/grid-pg.module').then((m) => m.GridPgPageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
