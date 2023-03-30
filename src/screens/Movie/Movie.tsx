import { useState } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import { useGetMovie, useGetTrailer } from './hooks';
import { MovieImg } from './styles';
import { BASE_IMG } from '../../utils/const/config';
import { TrailerModal, CloseButton } from '../../components';

export const Movie = () => {
  const { movie } = useGetMovie();
  const [showTrailer, setShowTrailer] = useState<boolean>(false);
  const { trailer } = useGetTrailer();

  return (
    <>
      <ScrollView>
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
              onPress={() => setShowTrailer(!showTrailer)}
              toOpen
              style={{
                alignSelf: 'flex-end',
                marginTop: -40,
                marginRight: 20,
                width: 60,
                height: 60,
              }}
            />
          </>
        )}
      </ScrollView>
      {trailer && (
        <TrailerModal
          visible={showTrailer}
          onClose={() => setShowTrailer(!showTrailer)}
          trailer={trailer}
        />
      )}
    </>
  );
};
