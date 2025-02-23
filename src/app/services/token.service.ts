import { Injectable } from '@angular/core';

const KEY = 'authToken';
@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private isLocalStorageAvailable(): boolean {
    return typeof localStorage !== 'undefined';
  }

  salvarToken(token: string) {
    if (this.isLocalStorageAvailable()) {
      return localStorage.setItem(KEY, token);
    }
  }
  excluirToken() {
    if (this.isLocalStorageAvailable()) {
      localStorage.removeItem(KEY);
    }
  }
  retornarToken() {
    if (!this.isLocalStorageAvailable()) {
      return '';
    }
    return localStorage.getItem(KEY) ?? '';
  }
  possuiToken() {
    //as duas exclamações transforma a string em boolean
    return !!this.retornarToken();
  }
}
