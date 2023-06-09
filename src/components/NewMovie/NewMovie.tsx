/* eslint-disable prettier/prettier */
/* eslint-disable react/no-array-index-key */
import { FC } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { BASE_IMG } from '../../utils/const/config';
import { MovieImg, MovieTitle, MovieGenres, Genre } from './styles';
import type { NewMovieProps } from './types';

export const NewMovie: FC<NewMovieProps> = ({
  data,
  getGenreName,
  onPress,
}) => {
  const genres = getGenreName && getGenreName(data.genre_ids);
  return (
    <TouchableWithoutFeedback onPress={() => onPress && onPress()}>
      <View>
        <MovieImg
          style={{ resizeMode: 'contain' }}
          source={{ uri: `${BASE_IMG}/w500/${data.poster_path}` }}
        />
        <MovieTitle numberOfLines={1}>{data.title}</MovieTitle>
        <MovieGenres>
          {data.genre_ids.length > 0
            ? genres?.map((genre, index, arr) => (
              <Genre key={index}>{`${genre?.name}${index !== arr.length - 1 ? ', ' : ''
                }`}</Genre>
            ))
            : null}
        </MovieGenres>
      </View>
    </TouchableWithoutFeedback>
  );
};
