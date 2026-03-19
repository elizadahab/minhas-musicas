import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Banda, BandaRequest } from '../models';

@Injectable({
  providedIn: 'root'
})
export class BandaService {
  private readonly url = `${environment.apiUrl}/bandas`;

  constructor(private http: HttpClient) {}

  listarTodas(): Observable<Banda[]> {
    return this.http.get<Banda[]>(this.url);
  }

  buscarPorId(id: number): Observable<Banda> {
    return this.http.get<Banda>(`${this.url}/${id}`);
  }

  registrar(banda: BandaRequest): Observable<Banda> {
    return this.http.post<Banda>(this.url, banda);
  }

  avaliar(id: number, nota: number): Observable<Banda> {
    return this.http.post<Banda>(`${this.url}/${id}/avaliar`, { nota });
  }
}
