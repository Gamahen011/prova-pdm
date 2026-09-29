import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then(m => m.LoginPage),
  },
  {
    path: 'cadastro',
    loadComponent: () => import('./cadastro/cadastro.page').then(m => m.CadastroPage),
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then(m => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'comanda',
    loadComponent: () => import('./comanda/comanda.page').then( m => m.ComandaPage)
  },
  {
    path: 'fechada',
    loadComponent: () => import('./fechada/fechada.page').then( m => m.FechadaPage)
  },
];