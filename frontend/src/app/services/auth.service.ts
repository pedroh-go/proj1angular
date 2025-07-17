import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from '../auth.config';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private issuer = environment.issuer;
  private clientId = environment.clientId;
  private redirectUri = environment.redirectUri;

  constructor(private oauthService: OAuthService) {
    this.configure();
  }

  private configure(): void {
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  login(): void {
    this.oauthService.initCodeFlow();
  }

  loginWithKeycloak(): void {
    const url = `${this.issuer}/protocol/openid-connect/auth?client_id=${this.clientId}&redirect_uri=${this.redirectUri}&response_type=code&scope=openid`;
    window.location.href = url;
  }

  loginWithGoogle(): void {
    const url = `${this.issuer}/protocol/openid-connect/auth?client_id=${this.clientId}&redirect_uri=${this.redirectUri}&response_type=code&scope=openid&kc_idp_hint=google`;
    window.location.href = url;
  }

  logout(): void {
    this.oauthService.logOut();
  }

  isLoggedIn(): boolean {
    return this.oauthService.hasValidAccessToken();
  }

  get identityClaims(): any {
    return this.oauthService.getIdentityClaims();
  }

  get accessToken(): string {
    return this.oauthService.getAccessToken();
  }
}
