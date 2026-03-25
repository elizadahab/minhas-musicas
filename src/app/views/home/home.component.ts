import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  get usuario() {
    return this.authService.getUsuarioLogado();
  }

  irPara(rota: string) {
    this.router.navigate([rota]);
  }
}
