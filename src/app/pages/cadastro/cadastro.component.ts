import { Component } from '@angular/core';
import { FormCadastroComponent } from '../../components/form-cadastro/form-cadastro.component';

@Component({
  selector: 'app-cadastro',
  imports: [FormCadastroComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
})
export class CadastroComponent {}
