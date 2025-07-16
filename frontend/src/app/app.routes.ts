import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';
import { ListarPessoasComponent } from './listar-pessoas.component';
import { authGuard } from './guards/auth.guard';

export const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  { path: 'cadastro', component: CadastroPessoaComponent, canActivate: [authGuard] },
  { path: 'cadastro/:id', component: CadastroPessoaComponent, canActivate: [authGuard] },
  { path: 'listar', component: ListarPessoasComponent, canActivate: [authGuard] },
  { path: 'login', loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent) },
  { path: '', redirectTo: 'home', pathMatch: 'full' } //A rota vazia '') redireciona para 'home'
];
