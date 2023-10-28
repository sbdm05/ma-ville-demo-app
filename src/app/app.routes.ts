import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'accueil',
    pathMatch: 'full',
  },
  {
    path: 'accueil',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'home-page',
    loadChildren: () => {
      console.log('loading home-page');

      return import('./vues/home-page/home-page.routes').then((m) => m.routes)
    },
  },
];


