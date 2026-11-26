import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/pages/home-page').then((m) => m.HomePage),
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./features/projects/pages/projects-page').then((m) => m.ProjectsPage),
  },
  {
    path: 'projects/:slug',
    loadComponent: () =>
      import('./features/projects/pages/project-detail-page').then((m) => m.ProjectDetailPage),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./features/about/pages/about-page').then((m) => m.AboutPage),
  },
  {
    path: 'experience',
    loadComponent: () =>
      import('./features/experience/pages/experience-page').then((m) => m.ExperiencePage),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./features/contact/pages/contact-page').then((m) => m.ContactPage),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./features/not-found/pages/not-found-page').then((m) => m.NotFoundPage),
  },
];