import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoaService } from './services/pessoa.service';
import { Pessoa } from './models/pessoa';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-listar-pessoas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './listar-pessoas.component.html'
})
export class ListarPessoasComponent implements OnInit {
  pessoas: Pessoa[] = [];
  mensagem = '';

  constructor(
    private pessoaService: PessoaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carregarPessoas();
  }

  carregarPessoas(): void {
    this.pessoaService.listar().subscribe({
      next: (dados) => this.pessoas = dados,
      error: () => this.mensagem = 'Erro ao carregar pessoas.'
    });
  }

  excluir(pessoa: Pessoa): void {
    if (pessoa.id && confirm(`Deseja excluir ${pessoa.nome}?`)) {
      this.pessoaService.excluir(pessoa.id).subscribe({
        next: () => {
          this.mensagem = 'Pessoa excluída com sucesso!';
          this.carregarPessoas();
        },
        error: () => this.mensagem = 'Erro ao excluir pessoa.'
      });
    }
  }

 editar(id: number | undefined): void {
    if (id !== undefined) {
      this.router.navigate(['/cadastro', id]);
    } else {
      console.error('ID da pessoa está indefinido');
    }
  }
}
