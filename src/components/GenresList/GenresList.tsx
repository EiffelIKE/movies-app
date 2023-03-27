import { FC } from 'react';
import { Genre } from '../Genre';
import { StyledScrollView } from './styles';
import { GenresListProps } from './types';

export const GenresList: FC<GenresListProps> = ({
  data,
  onPress,
  activeGenre,
}) => {
  return (
    <StyledScrollView horizontal showsHorizontalScrollIndicator={false}>
      {data.map((genre) => {
        return (
          <Genre
            key={genre.id}
            active={genre.id === activeGenre}
            onPress={() => onPress && onPress(genre.id)}
          >
            {genre.name}
          </Genre>
        );
      })}
    </StyledScrollView>
  );
};
