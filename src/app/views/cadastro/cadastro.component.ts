import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
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
      nomeCompleto: ['', [Validators.required, Validators.minLength(3)]],
      usuario: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(32),
        this.senhaForteValidator
      ]],
      perfil: ['', Validators.required]
    });
  }

  senhaForteValidator(control: AbstractControl) {
    const valor = control.value || '';
    if (!/[A-Z]/.test(valor)) return { semMaiuscula: true };
    if (!/[a-z]/.test(valor)) return { semMinuscula: true };
    if (!/[0-9]/.test(valor)) return { semNumero: true };
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(valor)) return { semEspecial: true };
    if (/012|123|234|345|456|567|678|789|abc|bcd|cde|def/i.test(valor)) return { sequencial: true };
    return null;
  }

  getMensagemSenha(): string {
    const erros = this.form.get('senha')?.errors;
    if (!erros) return '';
    if (erros['minlength']) return 'Mínimo de 8 caracteres';
    if (erros['semMaiuscula']) return 'Deve ter ao menos uma letra maiúscula';
    if (erros['semMinuscula']) return 'Deve ter ao menos uma letra minúscula';
    if (erros['semNumero']) return 'Deve ter ao menos um número';
    if (erros['semEspecial']) return 'Deve ter ao menos um caractere especial';
    if (erros['sequencial']) return 'Senha não pode ter sequências como 12345 ou abcde';
    return '';
  }

  toggleSenha() {
    this.senhaVisivel = !this.senhaVisivel;
  }

  cadastrar() {
    if (this.form.invalid) return;
    this.carregando = true;
    this.erro = '';

    this.authService.cadastrar(this.form.value).subscribe({
      next: () => this.router.navigate(['/login']),
      error: () => {
        this.erro = 'Erro ao cadastrar. Verifique os dados e tente novamente.';
        this.carregando = false;
      }
    });
  }
}
