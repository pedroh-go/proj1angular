import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { provideOAuthClient } from 'angular-oauth2-oidc'; 

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(appRoutes),
    provideOAuthClient() 
  ]
});
