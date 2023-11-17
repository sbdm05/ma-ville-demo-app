import { Routes } from '@angular/router';
import { ModalPage } from './components/modal/modal.page';
import { HomePagePage } from './vues/home-page/home-page.page';
import { VueConfirmationPage } from './vues/vue-confirmation/vue-confirmation.page';
import { VueDemarchesPage } from './vues/vue-demarches/vue-demarches.page';
import { VueFormPage } from './vues/vue-form/vue-form.page';
import { VueKiosquePage } from './vues/vue-kiosque/vue-kiosque.page';
import { VuePostDetailsPage } from './vues/vue-post-details/vue-post-details.page';
import { VuePostsPage } from './vues/vue-posts/vue-posts.page';
import { VueSignalPage } from './vues/vue-signal/vue-signal.page';
import { VueWorksSitesPage } from './vues/vue-works-sites/vue-works-sites.page';

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
    component: HomePagePage,
  },
  {
    path: 'actus',
    component: VuePostsPage,
  },
  {
    path: 'actus',
    component: VuePostsPage,
  },
  {
    path: 'actus/:id',
    component: VuePostDetailsPage,
  },
  {
    path: 'signaler',
    component: VueSignalPage,
  },
  {
    path: 'signaler/:id',
    component: VueFormPage,
  },
  {
    path: 'mes-demarches',
    component: VueDemarchesPage,
  },
  {
    path: 'mes-demarches/:id',
    component: VueFormPage,
  },
  {
    path: 'confirmation',
    component: VueConfirmationPage,
  },
  {
    path: 'kiosque',
    component: VueKiosquePage,
  },
  {
    path: 'travaux',
    component: VueWorksSitesPage,
  },
  {
    path: 'modal',
    component: ModalPage
  },
];


