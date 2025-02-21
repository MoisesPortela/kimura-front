import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { Usuario } from '../../models/Usuario';
import { AutenticacaoService } from '../../services/autenticacao.service';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatFormFieldModule,
    CommonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  usuario!: Usuario;
  loginForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AutenticacaoService,
    private router: Router
  ) {}
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
    });
  }
  login() {
    this.usuario = {
      email: this.loginForm.value.email,
      senha: this.loginForm.value.password,
    };
    this.authService.AutenticarUsuario(this.usuario).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigateByUrl('/home');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
