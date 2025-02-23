import { TokenService } from './../../services/token.service';
import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../../services/pessoa.service';
import { PessoaListar } from '../../models/Pessoa';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  pessoas: PessoaListar[] = [];
  pessoasGeral: PessoaListar[] = [];
  token = '';

  constructor(
    private servicePessoa: PessoaService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.token = this.tokenService.retornarToken();
    console.log(this.token);
    this.servicePessoa.ListarPessoas(this.token).subscribe((response) => {
      this.pessoas = response.content;
      this.pessoasGeral = response.content;
    });
  }

  search(event: Event) {
    const target = event?.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.pessoas = this.pessoasGeral.filter((usuario) => {
      return usuario.nome.toLowerCase().includes(value);
    });
  }

  excluir(id: number) {
    this.servicePessoa.DeletarPessoas(id, this.token).subscribe(() => {
      this.pessoasGeral = this.pessoasGeral.filter(
        (usuario) => usuario.id !== id
      );
      this.pessoas = this.pessoasGeral;
    });
  }
}
