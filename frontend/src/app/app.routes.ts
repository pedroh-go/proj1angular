import { Routes } from '@angular/router';
import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';
import { ListarPessoasComponent } from './listar-pessoas.component';

export const appRoutes: Routes = [
  { path: 'cadastro', component: CadastroPessoaComponent },
  { path: 'listar', component: ListarPessoasComponent },
  { path: '', redirectTo: 'cadastro', pathMatch: 'full' }, // rota padrão
];
