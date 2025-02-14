import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../../services/pessoa.service';
import { PessoaListar } from '../../models/Pessoa';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  pessoas: PessoaListar[] = [];
  pessoasGeral: PessoaListar[] = [];

  constructor(private servicePessoa: PessoaService) {}

  ngOnInit(): void {
    this.servicePessoa.ListarPessoas().subscribe((response) => {
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
    this.servicePessoa.DeletarPessoas(id).subscribe(() => {
      this.pessoasGeral = this.pessoasGeral.filter(
        (usuario) => usuario.id !== id
      );
      this.pessoas = this.pessoasGeral;
    });
  }
}
