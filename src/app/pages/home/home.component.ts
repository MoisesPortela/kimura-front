import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../../services/pessoa.service';
import { PessoaListar } from '../../models/Pessoa';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  pessoas: PessoaListar[] = [];
  pessoasGeral: PessoaListar[] = [];
  constructor(private servicePessoa: PessoaService) {}
  ngOnInit(): void {
    this.servicePessoa.GetPessoas().subscribe((response) => {
      this.pessoas = response.content;
      this.pessoasGeral = response.content;
    });
  }
}
