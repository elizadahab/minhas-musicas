export interface Usuario {
  id?: number;
  nomeCompleto: string;
  usuario: string;
  email: string;
  perfil: 'GRAVADORA' | 'ARTISTA' | 'USUARIO';
}

export interface CadastroRequest {
  nomeCompleto: string;
  usuario: string;
  email: string;
  senha: string;
  perfil: 'GRAVADORA' | 'ARTISTA' | 'USUARIO';
}

export interface LoginRequest {
  usuario: string;
  senha: string;
}

export interface LoginResponse {
  token: string;
  usuario: Usuario;
}
