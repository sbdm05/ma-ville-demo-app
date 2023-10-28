import { Routes } from '@angular/router';
import { VueConfirmationPage } from '../vue-confirmation/vue-confirmation.page';
import { VueDemarchesPage } from '../vue-demarches/vue-demarches.page';
import { VueFormPage } from '../vue-form/vue-form.page';
import { VueKiosquePage } from '../vue-kiosque/vue-kiosque.page';
import { VuePostsPage } from '../vue-posts/vue-posts.page';
import { VueSignalPage } from '../vue-signal/vue-signal.page';
import { HomePagePage } from './home-page.page';

export const routes: Routes = [
  {
    path: '',
    component: HomePagePage,
  },
  {
    path: 'actus',
    component: VuePostsPage,
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
];

/**
 *
 *
 *  {
        path: 'actus',
        loadComponent: () =>
          import('../pages/page-posts/page-posts.page').then(
            (m) => m.PagePostsPage
          ),
      },
 */
