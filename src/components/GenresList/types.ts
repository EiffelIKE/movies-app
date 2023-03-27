import { GenresList } from '../../utils/types';

export interface GenresListProps {
  data: GenresList;
  onPress?: (id: number) => void;
  activeGenre: number;
}
