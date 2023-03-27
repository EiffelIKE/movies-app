export interface NewMovieItem {
  genre_ids: Array<number>;
  id: number;
  poster_path: string;
  title: string;
}

export type NewMovieItemList = Array<NewMovieItem>;
