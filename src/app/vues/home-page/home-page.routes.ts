import { Routes } from '@angular/router';
import { VueConfirmationPage } from '../vue-confirmation/vue-confirmation.page';
import { VueDemarchesPage } from '../vue-demarches/vue-demarches.page';
import { VueFormPage } from '../vue-form/vue-form.page';
import { VueKiosquePage } from '../vue-kiosque/vue-kiosque.page';
import { VuePostDetailsPage } from '../vue-post-details/vue-post-details.page';
import { VuePostsPage } from '../vue-posts/vue-posts.page';
import { VueSignalPage } from '../vue-signal/vue-signal.page';
import { VueWorksSitesPage } from '../vue-works-sites/vue-works-sites.page';
import { HomePagePage } from './home-page.page';

export const routes: Routes = [
  {
    path: '',
    component: HomePagePage,
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
