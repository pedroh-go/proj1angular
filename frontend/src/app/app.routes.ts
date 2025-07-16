import { Routes } from '@angular/router';
import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';
import { ListarPessoasComponent } from './listar-pessoas.component';
import { authGuard } from './guards/auth.guard';

export const appRoutes: Routes = [
  { path: 'cadastro', component: CadastroPessoaComponent, canActivate: [authGuard] },
  { path: 'cadastro/:id', component: CadastroPessoaComponent, canActivate: [authGuard] },
  { path: 'listar', component: ListarPessoasComponent, canActivate: [authGuard] },
  { path: 'login', loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent) },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];
