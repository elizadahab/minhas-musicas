import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./views/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'cadastro',
    loadComponent: () =>
      import('./views/cadastro/cadastro.component').then(m => m.CadastroComponent)
  },
  {
    path: 'recuperar-senha',
    loadComponent: () =>
      import('./views/recuperar-senha/recuperar-senha.component').then(m => m.RecuperarSenhaComponent)
  },
  {
    path: 'home',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./views/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'bandas',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./views/bandas/bandas.component').then(m => m.BandasComponent)
  },
  {
    path: 'bandas/:id',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./views/banda-detalhe/banda-detalhe.component').then(m => m.BandaDetalheComponent)
  },
  {
    path: 'albuns/:id',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./views/album-detalhe/album-detalhe.component').then(m => m.AlbumDetalheComponent)
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];
