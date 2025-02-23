import { PessoaService } from './../../services/pessoa.service';
import { Component, OnInit } from '@angular/core';
import { FormComponent } from '../../components/form-component/form.component';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoaListar } from '../../models/Pessoa';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-editar',
  imports: [FormComponent, CommonModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css',
})
export class EditarComponent implements OnInit {
  btnAcao = 'Editar';
  descTitulo = 'Editar Pessoa';
  pessoa!: PessoaListar;
  token = '';

  constructor(
    private service: PessoaService,
    private router: Router,
    private routeActivate: ActivatedRoute,
    private tokenService: TokenService
  ) {}
  ngOnInit(): void {
    const id = Number(this.routeActivate.snapshot.paramMap.get('id'));
    this.token = this.tokenService.retornarToken();
    console.log(id);
    this.service.DetalharPessoa(id, this.token).subscribe((res) => {
      this.pessoa = res;
    });
  }

  editarPessoa(pessoa: PessoaListar) {
    this.service.EditarPessoa(pessoa, this.token).subscribe((res) => {
      this.router.navigate(['/']);
    });
  }
}
