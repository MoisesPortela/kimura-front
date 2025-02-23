import { Component, OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { PessoaService } from '../../services/pessoa.service';
import { PessoaListar } from '../../models/Pessoa';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-detalhes',
  imports: [RouterModule],
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.css',
})
export class DetalhesComponent implements OnInit {
  pessoa!: PessoaListar;
  token = '';
  constructor(
    private servicePessoa: PessoaService,
    private routeActivate: ActivatedRoute,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    const id = Number(this.routeActivate.snapshot.paramMap.get('id'));
    this.token = this.tokenService.retornarToken();
    this.servicePessoa.DetalharPessoa(id, this.token).subscribe((pessoa) => {
      this.pessoa = pessoa;
    });
  }
}
