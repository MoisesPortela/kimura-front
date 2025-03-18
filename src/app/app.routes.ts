import { Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { HomeComponent } from './pages/home/home.component';
import { EditarComponent } from './pages/editar/editar.component';
import { DetalhesComponent } from './pages/detalhes/detalhes.component';
import { LoginComponent } from './pages/login/login.component';
import { CriarUsuarioComponent } from './pages/criar-usuario/criar-usuario.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'criarconta', component: CriarUsuarioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'editar/:id', component: EditarComponent },
  { path: 'detalhar/:id', component: DetalhesComponent },
];
