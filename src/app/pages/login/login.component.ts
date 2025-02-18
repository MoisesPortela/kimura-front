import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { Usuario } from '../../models/Usuario';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  usuario!: Usuario;
  loginForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      login: [null],
      password: [null],
    });
  }
  login() {
    console.log(this.loginForm.value.login);
    this.usuario = {
      login: this.loginForm.value.login,
      email: this.loginForm.value.login,
      senha: this.loginForm.value.password,
      telefone: 'xx xxxxx-xxxx',
    };
    console.table(this.usuario);
  }
}
