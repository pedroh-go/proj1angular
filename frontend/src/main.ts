import { bootstrapApplication } from '@angular/platform-browser';
import { CadastroPessoaComponent } from './app/cadastro-pessoa/cadastro-pessoa.component';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(CadastroPessoaComponent, {
  providers: [provideHttpClient()]
});
