import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from './person.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  
 private apiUrl = `${environment.apiUrl}/persons`;

  constructor(private http: HttpClient) { }

  //cadastrar
  create(person: Person): Observable<Person>{
    return this.http.post<Person>(this.apiUrl, person);
  }

  //listar
  list():Observable<Person[]>{
    return this.http.get<Person[]>(this.apiUrl);
  }

  //busca por id
  searchById(id: number): Observable<Person> {
    return this.http.get<Person>(`${this.apiUrl}/${id}`);
  }

  //atualizar
  update(person: Person):Observable<Person>{

  console.log("Teste: "+`${this.apiUrl}/${person.id}`);

    return this.http.put<Person>(`${this.apiUrl}/${person.id}`, person);
  }

  //excluir
  delete(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}