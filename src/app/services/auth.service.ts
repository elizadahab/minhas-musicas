import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { LoginRequest, LoginResponse, CadastroRequest, Usuario } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly url = `${environment.apiUrl}/auth`;

  constructor(private http: HttpClient) {}

  login(dados: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.url}/login`, dados).pipe(
      tap(response => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('usuario', JSON.stringify(response.usuario));
      })
    );
  }

  cadastrar(dados: CadastroRequest): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.url}/cadastrar`, dados);
  }

  recuperarSenha(email: string): Observable<any> {
    return this.http.post(`${this.url}/recuperar-senha`, { email });
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getUsuarioLogado(): Usuario | null {
    const usuario = localStorage.getItem('usuario');
    return usuario ? JSON.parse(usuario) : null;
  }

  isLogado(): boolean {
    return !!this.getToken();
  }
}
