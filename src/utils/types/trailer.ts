export interface Trailer {
  id: string;
  iso_3166_1: string;
  iso_639_1: string;
  key: string;
  name: string;
  official: boolean;
  published_at: string;
  site: 'YouTube' | string;
  size: number;
  type: string;
}

export type TrailerList = Array<Trailer>;
