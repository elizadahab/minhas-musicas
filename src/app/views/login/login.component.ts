import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup;
  senhaVisivel = false;
  carregando = false;
  erro = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      senha: ['', Validators.required],
      lembrar: [false]
    });
  }

  toggleSenha() {
    this.senhaVisivel = !this.senhaVisivel;
  }

  entrar() {
    if (this.form.invalid) return;
    this.carregando = true;
    this.erro = '';

    this.authService.login(this.form.value).subscribe({
      next: () => this.router.navigate(['/home']),
      error: () => {
        this.erro = 'Usuário ou senha inválidos.';
        this.carregando = false;
      }
    });
  }
}
