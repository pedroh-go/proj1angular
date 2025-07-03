import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from './auth.config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <nav>
      <a routerLink="/cadastro">Cadastro</a> |
      <a routerLink="/listar">Listar</a> |
      <span *ngIf="!isLoggedIn()">
        <button (click)="login()">Login</button>
      </span>
      <span *ngIf="isLoggedIn()">
        <strong>Bem-vindo, {{ getUserName() }}</strong>
        <button (click)="logout()">Sair</button>
      </span>
    </nav>
    <hr />
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  constructor(private oauthService: OAuthService) {
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  login() {
    this.oauthService.initCodeFlow(); // <-- corrigido aqui
  }

  logout() {
    this.oauthService.logOut();
  }

  isLoggedIn(): boolean {
    return this.oauthService.hasValidAccessToken();
  }

  getUserName(): string {
    const claims: any = this.oauthService.getIdentityClaims();
    return claims ? claims.name || claims.preferred_username : '';
  }
}