import { PessoaListar } from './../models/Pessoa';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../models/Response';

@Injectable({
  providedIn: 'root',
})
export class PessoaService {
  ApiUrl = environment.UrlApi;

  constructor(private http: HttpClient) {}

  ListarPessoas(token: string): Observable<Response<PessoaListar[]>> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<Response<PessoaListar[]>>(`${this.ApiUrl}pessoas`, {
      headers,
    });
  }
  DeletarPessoas(
    id: number,
    token: string
  ): Observable<Response<PessoaListar[]>> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.delete<Response<PessoaListar[]>>(
      `${this.ApiUrl}pessoas/${id}`,
      { headers }
    );
  }
  CriarPessoa(
    pessoa: PessoaListar,
    token: string
  ): Observable<Response<PessoaListar[]>> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.post<Response<PessoaListar[]>>(
      `${this.ApiUrl}pessoas`,
      pessoa,
      { headers }
    );
  }
  DetalharPessoa(id: number, token: string): Observable<PessoaListar> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<PessoaListar>(`${this.ApiUrl}pessoas/${id}`, {
      headers,
    });
  }
  EditarPessoa(pessoa: PessoaListar, token: string): Observable<PessoaListar> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.put<PessoaListar>(`${this.ApiUrl}pessoas`, pessoa, {
      headers,
    });
  }
}
