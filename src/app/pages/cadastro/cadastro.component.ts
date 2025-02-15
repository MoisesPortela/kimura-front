import { Component } from '@angular/core';
import { FormComponent } from '../../components/form-cadastro/form.component';
import { PessoaListar } from '../../models/Pessoa';
import { PessoaService } from '../../services/pessoa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  imports: [FormComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
})
export class CadastroComponent {
  btnAcao = 'Cadastrar';
  descTitulo = 'Cadastrar Pessoa';
  constructor(private pessoaService: PessoaService, private router: Router) {}

  criarPessoa($event: PessoaListar) {
    this.pessoaService.CriarPessoa($event).subscribe((res) => {
      this.router.navigate(['/']);
    });
  }
}
