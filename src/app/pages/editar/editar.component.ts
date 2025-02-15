import { PessoaService } from './../../services/pessoa.service';
import { Component, OnInit } from '@angular/core';
import { FormComponent } from '../../components/form-cadastro/form.component';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoaListar } from '../../models/Pessoa';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

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

  constructor(
    private service: PessoaService,
    private router: Router,
    private routeActivate: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const id = Number(this.routeActivate.snapshot.paramMap.get('id'));
    console.log(id);
    this.service.DetalharPessoa(id).subscribe((res) => {
      this.pessoa = res;
    });
  }

  editarPessoa(pessoa: PessoaListar) {
    this.service.EditarPessoa(pessoa).subscribe((res) => {
      this.router.navigate(['/']);
    });
  }
}
