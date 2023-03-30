import { ScrollView, StatusBar } from 'react-native';
import { useGetMovie, useTrailer } from './hooks';
import { MovieImg } from './styles';
import { BASE_IMG } from '../../utils/const/config';
import {
  TrailerModal,
  CloseButton,
  SectionContainer,
  GenresList,
  RatedMovie,
  Overview,
} from '../../components';

export const Movie = () => {
  const { movie } = useGetMovie();
  const { trailer, showTrailer, toggleTrailer } = useTrailer();

  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle={
          movie && Object.keys(movie).length > 0
            ? 'light-content'
            : 'dark-content'
        }
        hidden={showTrailer}
      />
      {movie && Object.keys(movie).length > 0 && (
        <>
          <MovieImg
            source={{ uri: `${BASE_IMG}/w500/${movie?.poster_path}` }}
          />
          <CloseButton
            onPress={() => toggleTrailer()}
            toOpen
            style={{
              alignSelf: 'flex-end',
              marginTop: -40,
              marginRight: 20,
              width: 60,
              height: 60,
            }}
          />
          <ScrollView>
            <SectionContainer
              title={movie.title}
              containerStyle={{ marginTop: 0 }}
            >
              <GenresList data={movie.genres} />
              <RatedMovie
                starValue={movie.vote_average / 2}
                votes={movie.vote_count}
              />
              <Overview
                decription={movie.overview}
                releaseDate={movie.release_date}
              />
            </SectionContainer>
          </ScrollView>
        </>
      )}
      {trailer && (
        <TrailerModal
          visible={showTrailer}
          onClose={() => toggleTrailer()}
          trailer={trailer}
        />
      )}
    </>
  );
};
