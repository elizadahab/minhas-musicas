import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Musica, MusicaRequest } from '../models';

@Injectable({
  providedIn: 'root'
})
export class MusicaService {
  private readonly url = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {}

  listarPorAlbum(albumId: number): Observable<Musica[]> {
    return this.http.get<Musica[]>(`${this.url}/albuns/${albumId}/musicas`);
  }

  registrar(musica: MusicaRequest, albumId: number): Observable<Musica> {
    return this.http.post<Musica>(`${this.url}/albuns/${albumId}/musicas`, musica);
  }
}
