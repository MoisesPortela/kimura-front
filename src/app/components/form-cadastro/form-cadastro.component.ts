import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { PessoaListar } from '../../models/Pessoa';

@Component({
  selector: 'app-form-cadastro',
  imports: [FormsModule, RouterModule, ReactiveFormsModule],
  templateUrl: './form-cadastro.component.html',
  styleUrl: './form-cadastro.component.css',
})
export class FormCadastroComponent implements OnInit {
  @Output()
  onSubmit = new EventEmitter<PessoaListar>();

  formularioPessoa!: FormGroup;

  constructor() {}

  ngOnInit() {
    this.formularioPessoa = new FormGroup({
      id: new FormControl(0),
      nome: new FormControl(''),
      cpf: new FormControl(''),
      rg: new FormControl(''),
      email: new FormControl(''),
      idade: new FormControl(0),
      telefone: new FormControl(''),
    });
  }
  submit() {
    this.onSubmit.emit(this.formularioPessoa.value);
  }
}
