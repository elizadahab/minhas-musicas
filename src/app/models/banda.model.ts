import { Album } from './album.model';
import { Avaliacao } from './avaliacao.model';

export interface Banda {
  id?: number;
  nome: string;
  resumo?: string;
  albuns: Album[];
  avaliacao?: Avaliacao;
  media?: number;
}

export interface BandaRequest {
  nome: string;
  resumo?: string;
}
