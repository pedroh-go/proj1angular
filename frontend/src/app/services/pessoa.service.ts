import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from '../models/pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  private apiUrl = 'http://localhost:8080/api/pessoas';

  constructor(private http: HttpClient) { }

  cadastrar(pessoa: Pessoa): Observable<Pessoa>{
    return this.http.post<Pessoa>(this.apiUrl, pessoa);
  }

  listar():Observable<Pessoa[]>{
    return this.http.get<Pessoa[]>(this.apiUrl);
  }
}
