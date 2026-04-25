/**
 * Tipos do Worker
 */

export interface Env {
  API_BASE_URL: string;
  FRONTEND_URL: string;
  EVENTO_CACHE?: KVNamespace;
}

export interface Evento {
  id: string;
  nome: string;
  slug: string;
  descricao: string;
  data_inicio: string;
  data_fim: string;
  local: string;
  logo?: string;
  banner?: string;
  og_image?: string;
  status: string;
}

export interface ApiResponse<T> {
  data: T;
}
