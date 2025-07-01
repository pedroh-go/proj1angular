import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from '../models/pessoa';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  
  //private apiUrl = 'http://localhost:8080/api/pessoas';
 private apiUrl = `${environment.apiUrl}/pessoas`;

  constructor(private http: HttpClient) { }

  //cadastrar
  cadastrar(pessoa: Pessoa): Observable<Pessoa>{
    return this.http.post<Pessoa>(this.apiUrl, pessoa);
  }

  //listar
  listar():Observable<Pessoa[]>{
    return this.http.get<Pessoa[]>(this.apiUrl);
  }

  //atualizar
  atualizar(pessoa: Pessoa):Observable<Pessoa>{
    return this.http.put<Pessoa>(`${this.apiUrl}/${pessoa.id}`, pessoa);
  }

  //excluir
  excluir(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
