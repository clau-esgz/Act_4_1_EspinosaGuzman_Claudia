import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'perfil',
    loadComponent: () => import('./components/profile-view/profile-view.component').then(m => m.ProfileViewComponent)
  },
  {
    path: '',
    redirectTo: '/perfil',
    pathMatch: 'full'
  }
];
