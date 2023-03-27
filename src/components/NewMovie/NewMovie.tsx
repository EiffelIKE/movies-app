/* eslint-disable react/no-array-index-key */
import { FC } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { Text } from 'react-native-paper';
import { BASE_IMG } from '../../utils/const/config';
import { MovieImg, MovieTitle, MovieGenres } from './styles';
import type { NewMovieProps } from './types';

export const NewMovie: FC<NewMovieProps> = ({ data, getGenreName }) => {
  const genres = getGenreName && getGenreName(data.genre_ids);
  return (
    <TouchableWithoutFeedback
      onPress={() => console.log(`It will Redirect to ${data.title}`)}
    >
      <View>
        <MovieImg source={{ uri: `${BASE_IMG}/w500/${data.poster_path}` }} />
        <MovieTitle>{data.title}</MovieTitle>
        <MovieGenres>
          {data.genre_ids.length > 0
            ? genres?.map((genre, index, arr) => (
                <Text key={index}>{`${genre}${
                  index !== arr.length - 1 ? ', ' : ''
                }`}</Text>
              ))
            : null}
        </MovieGenres>
      </View>
    </TouchableWithoutFeedback>
  );
};