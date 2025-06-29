import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PessoaService } from '../services/pessoa.service';
import { Pessoa } from '../models/pessoa';

@Component({
  selector: 'app-cadastro-pessoa',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro-pessoa.component.html',//Isso garante o vinculo com a página html e quando o botão submite for acionado, apontará para cá
  styleUrl: './cadastro-pessoa.component.css'
})
export class CadastroPessoaComponent {
  pessoa: Pessoa = { nome: '', email: '' };
  pessoas: Pessoa[] = [];
  mensagem = '';
  editando = false;// flag para alternar entre cadastro e edição:

  constructor(private pessoaService: PessoaService) { }

  ngOnInit() {
    this.carregarPessoas();
  }

  salvar() {
    if (this.editando && this.pessoa.id) { 
      //atualiza
      this.pessoaService.atualizar(this.pessoa).subscribe({
        next: () => {
          this.mensagem = 'Pessoa atualizada com sucesso!';
          this.resetarFormulario();
          this.carregarPessoas();
        },
        error: () => this.mensagem = 'Erro ao atualizar.'
      });
    } else { 
      //cadastra
      this.pessoaService.cadastrar(this.pessoa).subscribe({
        next: () => {
          this.mensagem = 'Cadastrado com sucesso!';
          this.resetarFormulario();
          this.carregarPessoas();
        },
        error: () => this.mensagem = 'Erro ao cadastrar.'
      });
    }
  }

  //carrega para listar
  carregarPessoas() {
    this.pessoaService.listar().subscribe({
      next: (dados) => this.pessoas = dados,
      error: (erro) => console.error('Erro ao buscar ', erro)
    });
  }

  //excluir um registro 
  excluir(pessoa: Pessoa){
    if(pessoa.id && confirm(`Deseja realmente excluir ${pessoa.nome}?`)){
      this.pessoaService.excluir(pessoa.id).subscribe({
        next: () => {
          this.mensagem = 'Registro excluído com sucesso';
          this.carregarPessoas();//atualiza a lista
        },
        error: () => this.mensagem = 'Erro ao tentar excluir'
      });
    }
  }

  //preencher o formulário com os dados do registro
  editar(pessoa: Pessoa) {
    this.pessoa = { ...pessoa };//copia
    this.editando = true;
  }

  //reseta o formulário
  resetarFormulario() {
    this.pessoa = { nome: '', email: '' };
    this.editando = false;
  }

}