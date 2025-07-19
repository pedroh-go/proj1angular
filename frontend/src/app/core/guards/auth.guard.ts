import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';

export const authGuard: CanActivateFn = () => {
  const oauthService = inject(OAuthService);
  const router = inject(Router);

  if (oauthService.hasValidAccessToken()) {
    return true;
  }

  //router.navigate(['/']);//Se há páginas públicas e outras protegidas: redirecione para uma pública com
  oauthService.initCodeFlow();//Se o usuário sempre precisa estar logado: use initCodeFlow() no guard.
  return false;
};
