import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  //issuer: 'http://localhost:8081/realms/proj1angular', //local
  issuer: 'https://8081-pedrohgo-proj1angular-7xyo5c7jdnv.ws-us120.gitpod.io/realms/proj1angular',
  redirectUri: window.location.origin,
  clientId: 'proj1angular-app',
  responseType: 'code',
  scope: 'openid profile email',
  showDebugInformation: true,
  requireHttps: false
};