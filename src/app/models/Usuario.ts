export interface Usuario {
  email: string;
  senha: string;
  telefone?: string;
  tipoPerfil?: string;
  pessoaId?: number;
  pessoaNome?: string;
  empresaId?: number;
  empresaNome?: string;
  admId?: number;
  admNome?: string;
}
