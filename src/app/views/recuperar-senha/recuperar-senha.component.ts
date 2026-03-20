import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recuperar-senha',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './recuperar-senha.component.html',
  styleUrls: ['./recuperar-senha.component.scss']
})
export class RecuperarSenhaComponent {
  form: FormGroup;
  carregando = false;
  enviado = false;
  erro = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  enviar() {
    if (this.form.invalid) return;
    this.carregando = true;
    this.erro = '';

    this.authService.recuperarSenha(this.form.value.email).subscribe({
      next: () => {
        this.enviado = true;
        this.carregando = false;
      },
      error: () => {
        this.erro = 'Email não encontrado. Verifique e tente novamente.';
        this.carregando = false;
      }
    });
  }
}
