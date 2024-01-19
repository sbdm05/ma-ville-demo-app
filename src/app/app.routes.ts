import { Routes } from '@angular/router';
import { ModalPage } from './components/modal/modal.page';
import { PostsResolver } from './service/resolvers/posts.resolver';
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
    redirectTo: 'loading',
    pathMatch: 'full',
  },
  // {
  //   path: 'accueil',
  //   loadComponent: () =>
  //     import('./folder/folder.page').then((m) => m.FolderPage),
  // },
  {
    path: 'home-page',
    component: HomePagePage,
    // resolve: { posts: PostsResolver },
  },

  {
    path: 'loading',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
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
    path: 'chantiers',
    loadComponent: () =>
      import('./vues/vue-works-sites/vue-works-sites.page').then(
        (m) => m.VueWorksSitesPage
      ),
  },
  {
    path: 'modal',
    component: ModalPage,
  },
  {
    path: 'contactez-vos-elus',
    loadComponent: () =>
      import(
        './vues/vue-contact-representant/vue-contact-representant.page'
      ).then((m) => m.VueContactRepresentantPage),
  },
  {
    path: 'contactez-details/:arg',
    loadComponent: () =>
      import(
        './vues/vue-contact-representant-detail/vue-contact-representant-detail.page'
      ).then((m) => m.VueContactRepresentantDetailPage),
  },
  {
    path: 'contactez-vos-elus',
    loadComponent: () =>
      import(
        './vues/vue-contact-representant/vue-contact-representant.page'
      ).then((m) => m.VueContactRepresentantPage),
  },

  {
    path: 'balades-urbaines',
    loadComponent: () =>
      import('./vues/vue-balades-urbaines/vue-balades-urbaines.page').then(
        (m) => m.VueBaladesUrbainesPage
      ),
  },
  {
    path: 'balades-urbaines/:id',
    loadComponent: () =>
      import(
        './vues/vue-balades-urbaines-detail/vue-balades-urbaines-detail.page'
      ).then((m) => m.VueBaladesUrbainesDetailPage),
  },
  {
    path: 'agenda',
    loadComponent: () =>
      import('./vues/vue-agenda/vue-agenda.page').then((m) => m.VueAgendaPage),
  },
  {
    path: 'agenda/:id',
    loadComponent: () =>
      import('./vues/vue-agenda-details/vue-agenda-details.page').then(
        (m) => m.VueAgendaDetailsPage
      ),
  },
  {
    path: 'shopping',
    loadComponent: () =>
      import('./vues/shoopping-categories/shoopping-categories.page').then(
        (m) => m.ShooppingCategoriesPage
      ),
  },
  {
    path: 'shopping/:id',
    loadComponent: () =>
      import(
        './vues/vue-shopping-details-categories/vue-shopping-details-categories.page'
      ).then((m) => m.VueShoppingDetailsCategoriesPage),
  },
  {
    path: 'favoris',
    loadComponent: () =>
      import('./vues/vue-favoris/vue-favoris.page').then(
        (m) => m.VueFavorisPage
      ),
  },

  {
    path: 'settings',
    loadComponent: () =>
      import('./vues/vue-settings/vue-settings.page').then(
        (m) => m.VueSettingsPage
      ),
  },
  {
    path: 'rechercher',
    resolve: { posts: PostsResolver },
    loadComponent: () =>
      import('./vues/vue-search/vue-search.page').then((m) => m.VueSearchPage),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./vues/vue-not-found/vue-not-found.page').then(
        (m) => m.VueNotFoundPage
      ),
  },
  {
    path: 'search-input',
    loadComponent: () =>
      import('./components/search-input/search-input.page').then(
        (m) => m.SearchInputPage
      ),
  },
  {
    path: 'list',
    loadComponent: () => import('./components/list/list.page').then( m => m.ListPage)
  },
];
