import { Injectable } from '@angular/core';

const KEY = 'authToken';
@Injectable({
  providedIn: 'root',
})
export class TokenService {
  salvarToken(token: string) {
    return localStorage.setItem(KEY, token);
  }
  excluirToken() {
    localStorage.removeItem(KEY);
  }
  retornarToken() {
    return localStorage.getItem(KEY) ?? '';
  }
  possuiToken() {
    //as duas exclamações transforma a string em boolean
    return !!this.retornarToken();
  }
}
