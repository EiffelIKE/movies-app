import { StatusBar } from 'react-native';
import { useGetMovie, useTrailer } from './hooks';
import { TrailerModal, MovieItem } from '../../components';

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
        <MovieItem
          poster_path={movie.poster_path}
          imageStyle={{
            width: '100%',
            height: 500,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
          }}
          onPress={() => toggleTrailer()}
          buttonStyle={{
            alignSelf: 'flex-end',
            marginTop: -40,
            marginRight: 20,
            width: 60,
            height: 60,
          }}
          title={movie.title}
          containerStyle={{ marginTop: 0 }}
          genres={movie.genres}
          starValue={movie.vote_average / 2}
          votes={movie.vote_count}
          description={movie.overview}
          releaseDate={movie.release_date}
          launchStyle={{ marginTop: 20 }}
          ratingContainerStyle={{ flexDirection: 'row', alignItems: 'center' }}
        />
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
