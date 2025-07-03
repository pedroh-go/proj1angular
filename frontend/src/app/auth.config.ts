import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'http://localhost:8081/realms/proj1angular',
  redirectUri: window.location.origin,
  clientId: 'proj1angular-app',
  responseType: 'code',
  scope: 'openid profile email',
  showDebugInformation: true,
  requireHttps: false
};