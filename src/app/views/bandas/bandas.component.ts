import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BandaService } from '../../services/banda.service';
import { Banda } from '../../models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bandas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bandas.component.html',
  styleUrls: ['./bandas.component.scss']
})
export class BandasComponent implements OnInit {
  bandas: Banda[] = [];
  carregando = true;
  erro = '';

  constructor(
    private bandaService: BandaService,
    private router: Router
  ) {}

  ngOnInit() {
    this.bandaService.listarTodas().subscribe({
      next: (data) => {
        this.bandas = data;
        this.carregando = false;
      },
      error: () => {
        this.erro = 'Erro ao carregar bandas.';
        this.carregando = false;
      }
    });
  }

  verDetalhe(id: number) {
    this.router.navigate(['/bandas', id]);
  }

  registrarBanda() {
    this.router.navigate(['/bandas/nova']);
  }
}
