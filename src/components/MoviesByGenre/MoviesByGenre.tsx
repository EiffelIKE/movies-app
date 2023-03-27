import { FC } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { BASE_IMG } from '../../utils/const/config';
import { MovieImg, MovieTitle } from './styles';
import type { MovieByGenreProps } from './types';

export const MoviesByGenre: FC<MovieByGenreProps> = ({ data, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={() => onPress && onPress()}>
      <View>
        <MovieImg
          style={{ resizeMode: 'contain' }}
          source={{ uri: `${BASE_IMG}/w500${data.poster_path}` }}
        />
        <MovieTitle numberOfLines={1}>{data.title}</MovieTitle>
      </View>
    </TouchableWithoutFeedback>
  );
};
