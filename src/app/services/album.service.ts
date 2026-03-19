import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Album, AlbumRequest } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private readonly url = `${environment.apiUrl}/albuns`;

  constructor(private http: HttpClient) {}

  listarPorBanda(bandaId: number): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.url}?bandaId=${bandaId}`);
  }

  buscarPorId(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.url}/${id}`);
  }

  registrar(album: AlbumRequest): Observable<Album> {
    return this.http.post<Album>(this.url, album);
  }

  avaliar(id: number, nota: number): Observable<Album> {
    return this.http.post<Album>(`${this.url}/${id}/avaliar`, { nota });
  }
}
