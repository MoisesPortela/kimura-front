import { Component, OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { PessoaService } from '../../services/pessoa.service';
import { PessoaListar } from '../../models/Pessoa';

@Component({
  selector: 'app-detalhes',
  imports: [RouterModule],
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.css',
})
export class DetalhesComponent implements OnInit {
  pessoa!: PessoaListar;
  constructor(
    private servicePessoa: PessoaService,
    private routeActivate: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.routeActivate.snapshot.paramMap.get('id'));

    this.servicePessoa.DetalharPessoa(id).subscribe((pessoa) => {
      this.pessoa = pessoa;
    });
  }
}
