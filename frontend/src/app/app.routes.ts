import { Routes } from '@angular/router';
import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';
import { ListarPessoasComponent } from './listar-pessoas.component';
import { authGuard } from './guards/auth.guard'; // importe o guard

export const appRoutes: Routes = [
  { path: 'cadastro', component: CadastroPessoaComponent, canActivate: [authGuard] },
  { path: 'cadastro/:id', component: CadastroPessoaComponent, canActivate: [authGuard] },
  { path: 'listar', component: ListarPessoasComponent },
  //{ path: '', redirectTo: 'cadastro', pathMatch: 'full' },// rota padrão
  { path: '', redirectTo: 'listar', pathMatch: 'full' }
];
