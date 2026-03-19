export interface Musica {
  id?: number;
  nome: string;
  duracao: number;
  descricaoResumida?: string;
}

export interface MusicaRequest {
  nome: string;
  duracao: number;
  descricaoResumida?: string;
}
