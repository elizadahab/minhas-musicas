import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album-detalhe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-detalhe.component.html',
  styleUrls: ['./album-detalhe.component.scss']
})
export class AlbumDetalheComponent implements OnInit {
  album: Album | null = null;
  carregando = true;
  erro = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.buscarPorId(id).subscribe({
      next: (data) => {
        this.album = data;
        this.carregando = false;
      },
      error: () => {
        this.erro = 'Erro ao carregar álbum.';
        this.carregando = false;
      }
    });
  }

  voltar() {
    window.history.back();
  }

  avaliar(nota: number) {
    if (!this.album?.id) return;
    this.albumService.avaliar(this.album.id, nota).subscribe({
      next: (data) => this.album = data
    });
  }

  formatarDuracao(segundos: number): string {
    const min = Math.floor(segundos / 60);
    const sec = segundos % 60;
    return `${min}:${sec.toString().padStart(2, '0')}`;
  }

  formatarDuracaoTotal(segundos: number): string {
    const min = Math.floor(segundos / 60);
    const sec = segundos % 60;
    return sec > 0 ? `${min} min ${sec} s` : `${min} min`;
  }
}
