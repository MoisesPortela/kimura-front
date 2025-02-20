import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
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

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    /*
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
      */
    this.formularioPessoa = this.formBuilder.group({
      id: [this.dadosPessoa ? this.dadosPessoa.id : 0],
      nome: [this.dadosPessoa ? this.dadosPessoa.nome : ''],
      cpf: [this.dadosPessoa ? this.dadosPessoa.cpf : '', Validators.required],
      rg: [this.dadosPessoa ? this.dadosPessoa.rg : '', Validators.required],
      email: [
        this.dadosPessoa ? this.dadosPessoa.email : '',
        [Validators.email, Validators.required],
      ],
      idade: [this.dadosPessoa ? this.dadosPessoa.idade : 0],
      telefone: [
        this.dadosPessoa ? this.dadosPessoa.telefone : '',
        Validators.required,
      ],
    });
  }
  submit() {
    this.onSubmit.emit(this.formularioPessoa.value);
  }
}
