import { FC } from 'react';
import { Image, ScrollView, View } from 'react-native';
import { SectionContainer } from '../SectionContainer';
import { GenresList } from '../GenresList';
import { RatedMovie } from '../RatedMovie';
import { Overview } from '../Overview';
import { CloseButton } from '../CloseButton';
import { BASE_IMG } from '../../utils/const/config';
import type { MovieItemProps } from './types';

export const MovieItem: FC<MovieItemProps> = ({
  poster_path,
  onPress,
  title,
  containerStyle,
  genres,
  starValue,
  votes,
  description,
  releaseDate,
  buttonStyle,
  imageStyle,
  ratingContainerStyle,
  movieContainerStyle,
  titleStyle,
  descriptionStyle,
  launchStyle,
}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={movieContainerStyle}>
        <Image
          source={{ uri: `${BASE_IMG}/w500/${poster_path}` }}
          style={imageStyle}
        />
        {onPress && (
          <CloseButton onPress={onPress} toOpen style={buttonStyle} />
        )}

        <SectionContainer
          title={title}
          containerStyle={containerStyle}
          titleStyle={titleStyle}
        >
          {genres && <GenresList data={genres} />}
          <RatedMovie
            starValue={starValue}
            votes={votes}
            ratingContainerStyle={ratingContainerStyle}
          />
          <Overview
            decription={description}
            releaseDate={releaseDate}
            launchStyle={launchStyle}
            descriptionStyle={descriptionStyle}
          />
        </SectionContainer>
      </View>
    </ScrollView>
  );
};
