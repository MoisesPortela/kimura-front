import { Component } from '@angular/core';
import { FormCadastroComponent } from '../../components/form-cadastro/form-cadastro.component';
import { PessoaListar } from '../../models/Pessoa';
import { PessoaService } from '../../services/pessoa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  imports: [FormCadastroComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
})
export class CadastroComponent {
  constructor(private pessoaService: PessoaService, private router: Router) {}

  criarPessoa($event: PessoaListar) {
    this.pessoaService.CriarPessoa($event).subscribe((res) => {
      this.router.navigate(['/']);
    });
  }
}
