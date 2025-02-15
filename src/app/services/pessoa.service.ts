import { PessoaListar } from './../models/Pessoa';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../models/Response';

@Injectable({
  providedIn: 'root',
})
export class PessoaService {
  ApiUrl = environment.UrlApi;

  constructor(private http: HttpClient) {}

  ListarPessoas(): Observable<Response<PessoaListar[]>> {
    return this.http.get<Response<PessoaListar[]>>(`${this.ApiUrl}pessoas`);
  }
  DeletarPessoas(id: number): Observable<Response<PessoaListar[]>> {
    return this.http.delete<Response<PessoaListar[]>>(
      `${this.ApiUrl}pessoas/${id}`
    );
  }
  CriarPessoa(pessoa: PessoaListar): Observable<Response<PessoaListar[]>> {
    return this.http.post<Response<PessoaListar[]>>(
      `${this.ApiUrl}pessoas`,
      pessoa
    );
  }
}
