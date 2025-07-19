import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PersonService } from '../../../core/person/person.service';
import { Person } from '../../../core/person/person.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-person',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-person.component.html',//Isso garante o vinculo com a página html e quando o botão submite for acionado, apontará para cá
  styleUrl: './create-person.component.css'
})
export class CreatePersonComponent {
  person: Person = { name: '', email: '' };
  persons: Person[] = [];
  mensagem = '';
  editando = false;// flag para alternar entre cadastro e edição:

  constructor(
      private personService: PersonService,
      private route: ActivatedRoute
    ){ }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.personService.searchById(+id).subscribe(person => {
        this.person = person;
        this.editando = true;
      });
    }
  }

  save() {
    if (this.editando && this.person.id) { 
      //atualiza
      this.personService.update(this.person).subscribe({
        next: () => {
          this.mensagem = 'Person atualizada com sucesso!';
          this.resetForm();
          this.loadPersons();
        },
        error: () => this.mensagem = 'Erro ao atualizar.'
      });
    } else { 
      //cadastra
      this.personService.create(this.person).subscribe({
        next: () => {
          this.mensagem = 'Cadastrado com sucesso!';
          this.resetForm();
          this.loadPersons();
        },
        error: () => this.mensagem = 'Erro ao cadastrar.'
      });
    }
  }

  //carrega para listar
  loadPersons() {
    this.personService.list().subscribe({
      next: (dados) => this.persons = dados,
      error: (erro) => console.error('Erro ao buscar ', erro)
    });
  }

  //excluir um registro 
  delete(person: Person){
    if(person.id && confirm(`Deseja realmente excluir ${person.name}?`)){
      this.personService.delete(person.id).subscribe({
        next: () => {
          this.mensagem = 'Registro excluído com sucesso';
          this.loadPersons();//atualiza a lista
        },
        error: () => this.mensagem = 'Erro ao tentar excluir'
      });
    }
  }

  //preencher o formulário com os dados do registro
  edit(person: Person) {
    this.person = { ...person };//copia
    this.editando = true;
  }

  //reseta o formulário
  resetForm() {
    this.person = { name: '', email: '' };
    this.editando = false;
  }

}