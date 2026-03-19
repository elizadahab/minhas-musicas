import { Musica } from './musica.model';
import { Avaliacao } from './avaliacao.model';

export interface Album {
  id?: number;
  nome: string;
  musicas: Musica[];
  avaliacao?: Avaliacao;
  duracaoTotal?: number;
  media?: number;
}

export interface AlbumRequest {
  nome: string;
  bandaId: number;
}
