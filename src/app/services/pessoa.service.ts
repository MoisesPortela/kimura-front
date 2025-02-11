import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../models/Response';
import { PessoaListar } from '../models/Pessoa';

@Injectable({
  providedIn: 'root',
})
export class PessoaService {
  ApiUrl = environment.UrlApi;

  constructor(private http: HttpClient) {}

  GetPessoas(): Observable<Response<PessoaListar[]>> {
    return this.http.get<Response<PessoaListar[]>>(this.ApiUrl);
  }
}
