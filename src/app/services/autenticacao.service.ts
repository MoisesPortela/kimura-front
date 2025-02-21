import { UserService } from './user.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Usuario } from '../models/Usuario';
import { Observable, tap } from 'rxjs';

interface AuthResponse {
  tokenJWT: string;
}

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  private apiURL = environment.UrlApi;
  constructor(private http: HttpClient, private UserService: UserService) {}

  AutenticarUsuario(usuario: Usuario): Observable<HttpResponse<AuthResponse>> {
    return this.http
      .post<AuthResponse>(`${this.apiURL}login`, usuario, {
        observe: 'response',
      })
      .pipe(
        tap((response) => {
          const authToken = response.body?.tokenJWT || '';
          this.UserService.salvarToken(authToken);
        })
      );
  }
}
