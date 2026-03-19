import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AvaliacaoService {
  private readonly url = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {}

  avaliarBanda(bandaId: number, nota: number): Observable<any> {
    return this.http.post(`${this.url}/bandas/${bandaId}/avaliar`, { nota });
  }

  avaliarAlbum(albumId: number, nota: number): Observable<any> {
    return this.http.post(`${this.url}/albuns/${albumId}/avaliar`, { nota });
  }
}
