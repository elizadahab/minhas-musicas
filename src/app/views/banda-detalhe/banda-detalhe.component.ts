import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BandaService } from '../../services/banda.service';
import { AlbumService } from '../../services/album.service';
import { Banda } from '../../models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banda-detalhe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banda-detalhe.component.html',
  styleUrls: ['./banda-detalhe.component.scss']
})
export class BandaDetalheComponent implements OnInit {
  banda: Banda | null = null;
  carregando = true;
  erro = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bandaService: BandaService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bandaService.buscarPorId(id).subscribe({
      next: (data) => {
        this.banda = data;
        this.carregando = false;
      },
      error: () => {
        this.erro = 'Erro ao carregar banda.';
        this.carregando = false;
      }
    });
  }

  verAlbum(id: number) {
    this.router.navigate(['/albuns', id]);
  }

  voltar() {
    this.router.navigate(['/bandas']);
  }

  avaliar(nota: number) {
    if (!this.banda?.id) return;
    this.bandaService.avaliar(this.banda.id, nota).subscribe({
      next: (data) => this.banda = data
    });
  }
}
