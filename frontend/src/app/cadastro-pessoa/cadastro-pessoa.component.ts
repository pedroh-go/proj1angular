import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PessoaService } from '../services/pessoa.service';
import {Pessoa } from '../models/pessoa';

@Component({
  selector: 'app-cadastro-pessoa',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro-pessoa.component.html',
  styleUrl: './cadastro-pessoa.component.css'
})
export class CadastroPessoaComponent {
  pessoa: Pessoa = {nome: '', email: ''};

  pessoas: Pessoa[]=[];

  mensagem = '';

  constructor(private pessoaService: PessoaService){}

  ngOnInit() {
    this.carregarPessoas();
  }

  salvar() {
    this.pessoaService.cadastrar(this.pessoa).subscribe({
      next: () => {
        this.mensagem = 'Pessoa cadastrada com sucesso!';
        this.pessoa = { nome: '', email: '' }; // limpa formulário
        this.carregarPessoas(); // atualiza a lista
      },
      error: (erro) => {
        console.error(erro);
        this.mensagem = 'Erro ao cadastrar a pessoa.';
      }
    });
  }

  carregarPessoas(){
    this.pessoaService.listar().subscribe({
      next: (dados)=> this.pessoas = dados,
      error: (erro) => console.error('Erro ao buscar pessoas', erro)
    });
  }
}