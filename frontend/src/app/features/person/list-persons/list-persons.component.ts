import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonService } from '../../../core/person/person.service';
import { Person } from '../../../core/person/person.model';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-list-persons',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list-persons.component.html'
})
export class ListPersonsComponent implements OnInit {
  persons: Person[] = [];
  mensagem = '';

  constructor(
    private personService: PersonService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadPersons();
  }

  loadPersons(): void {
    this.personService.list().subscribe({
      next: (dados) => this.persons = dados,
      error: () => this.mensagem = 'Erro ao carregar pessoas.'
    });
  }

  delete(person: Person): void {
    if (person.id && confirm(`Deseja excluir ${person.name}?`)) {
      this.personService.delete(person.id).subscribe({
        next: () => {
          this.mensagem = 'Person excluída com sucesso!';
          this.loadPersons();
        },
        error: () => this.mensagem = 'Erro ao excluir pessoa.'
      });
    }
  }

 edit(id: number | undefined): void {
    if (id !== undefined) {
      this.router.navigate(['/create', id]);
    } else {
      console.error('ID da pessoa está indefinido');
    }
  }
}
