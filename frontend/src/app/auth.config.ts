import { AuthConfig } from 'angular-oauth2-oidc';
import { environment } from '../environments/environment';

/**
 * variáveis abaixo definidas nos environment.ts(dev) ou environment.prod.ts(produção)
 */
export const authConfig: AuthConfig = {
  issuer: environment.issuer,
  redirectUri: environment.redirectUri,
  clientId: environment.clientId,
  responseType: 'code',
  scope: 'openid profile email',
  showDebugInformation: true,
  requireHttps: false
};