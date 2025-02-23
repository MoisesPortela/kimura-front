import { TokenService } from './../../services/token.service';
import { Component } from '@angular/core';
import { FormComponent } from '../../components/form-component/form.component';
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
  token = '';
  constructor(
    private pessoaService: PessoaService,
    private router: Router,
    private tokenService: TokenService
  ) {}

  criarPessoa($event: PessoaListar) {
    this.token = this.tokenService.retornarToken();
    this.pessoaService.CriarPessoa($event, this.token).subscribe((res) => {
      this.router.navigate(['/']);
    });
  }
}
