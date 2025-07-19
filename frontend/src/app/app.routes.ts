import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { CreatePersonComponent } from './features/person/create-person/create-person.component';
import { ListPersonsComponent } from './features/person/list-persons/list-persons.component';
import { authGuard } from '../../src/app/core/guards/auth.guard';

export const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  { path: 'create', component: CreatePersonComponent, canActivate: [authGuard] },
  { path: 'create/:id', component: CreatePersonComponent, canActivate: [authGuard] },
  { path: 'list', component: ListPersonsComponent, canActivate: [authGuard] },
  { path: 'login', loadComponent: () => import('./features/login/login.component').then(m => m.LoginComponent) },
  { path: '', redirectTo: 'home', pathMatch: 'full' } //A rota vazia '') redireciona para 'home'
];
