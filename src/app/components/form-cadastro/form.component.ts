import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { PessoaListar } from '../../models/Pessoa';

@Component({
  selector: 'app-form',
  imports: [FormsModule, RouterModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent implements OnInit {
  @Input()
  btnAcao!: string;
  @Input()
  descTitulo!: string;
  @Input()
  dadosPessoa: PessoaListar | null = null;
  @Output()
  onSubmit = new EventEmitter<PessoaListar>();

  formularioPessoa!: FormGroup;

  constructor() {}

  ngOnInit() {
    this.formularioPessoa = new FormGroup({
      id: new FormControl(this.dadosPessoa ? this.dadosPessoa.id : 0),
      nome: new FormControl(this.dadosPessoa ? this.dadosPessoa.nome : ''),
      cpf: new FormControl(this.dadosPessoa ? this.dadosPessoa.cpf : ''),
      rg: new FormControl(this.dadosPessoa ? this.dadosPessoa.rg : ''),
      email: new FormControl(this.dadosPessoa ? this.dadosPessoa.email : ''),
      idade: new FormControl(this.dadosPessoa ? this.dadosPessoa.idade : 0),
      telefone: new FormControl(
        this.dadosPessoa ? this.dadosPessoa.telefone : ''
      ),
    });
  }
  submit() {
    this.onSubmit.emit(this.formularioPessoa.value);
  }
}
