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

  editar(pessoa: Pessoa): void {
    // Redireciona para /cadastro passando o id como parâmetro (iremos tratar depois)
    this.router.navigate(['/cadastro'], { state: { pessoa } });
  }
}
