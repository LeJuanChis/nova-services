import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/pages/home-page/home-page').then(m => m.HomePage),
    title: 'Inicio',
  },
  {
    path: 'servicios',
    loadComponent: () =>
      import('./features/services/pages/services-page/services-page').then(m => m.ServicesPage),
    title: 'Servicios',
  },
  {
    path: 'servicios/:slug',
    loadComponent: () =>
      import('./features/services/pages/service-detail/service-detail').then(m => m.ServiceDetail),
    title: 'Detalle del servicio',
  },
  {
    path: 'favoritos',
    loadComponent: () =>
      import('./features/favorites/pages/favorites-page/favorites-page').then(m => m.FavoritesPage),
    title: 'Favoritos',
  },
  {
    path: 'contactos',
    loadComponent: () =>
      import('./features/contact/pages/contact-page/contact-page').then(m => m.ContactPage),
    title: 'Contactos',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
