import type { NewMovie } from './newMovie';
import type { GenresList } from './genresList';
import type { Collection } from './collection';
import type { SpokenLanguagesList } from './spokenLanguages';
import type { ProductionCompaniesList } from './productionCompanies';

export interface Movie extends NewMovie {
  belongs_to_collection: Collection;
  budge: number;
  genres: GenresList;
  homepage: string;
  imdb_id: string;
  overview: string;
  production_companies: ProductionCompaniesList;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguagesList;
  status: string;
  tagline: string;
}
