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
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

interface Roles {
  id: number;
  nome: string;
  valor: string;
}

@Component({
  selector: 'app-criar-usuario',
  imports: [
    ReactiveFormsModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatFormFieldModule,
    CommonModule,
  ],
  templateUrl: './criar-usuario.component.html',
  styleUrl: './criar-usuario.component.css',
})
export class CriarUsuarioComponent implements OnInit {
  roles: Roles[] = [
    { id: 1, nome: 'Administrador', valor: 'ROLE_ADMIN' },
    { id: 2, nome: 'Empresa', valor: 'ROLE_EMPRESA' },
    { id: 3, nome: 'Empregado', valor: 'ROLE_PESSOA' },
  ];
  usuario!: Usuario;
  userForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) {}
  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      tipoPerfil: ['', Validators.required], // Valor padrão vazio
    });
  }
  criarUser() {
    alert('Usuário criado com sucesso!');
  }
  voltar() {
    this.router.navigate(['/']);
  }
}
