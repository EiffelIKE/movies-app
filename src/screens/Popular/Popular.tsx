import { ScrollView, TouchableOpacity } from 'react-native';
import { usePopular } from './hooks/usePopular';
import { useSetIdParam } from '../../utils/hooks';
import { MovieItem, LoadMoreButton } from '../../components';

export const Popular = () => {
  const { popularMovies, increasePage, seeMore } = usePopular();
  const { setIdNavigate } = useSetIdParam();
  return (
    <ScrollView style={{ marginTop: 20 }} showsVerticalScrollIndicator={false}>
      {popularMovies &&
        popularMovies.map((movie) => {
          return (
            <TouchableOpacity
              key={movie.id}
              onPress={() => setIdNavigate(movie.id)}
            >
              <MovieItem
                movieContainerStyle={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginHorizontal: 20,
                  marginBottom: 20,
                }}
                poster_path={movie.poster_path}
                imageStyle={{
                  width: 100,
                  height: 150,
                  borderRadius: 10,
                }}
                title={
                  movie.title.length > 26
                    ? `${movie.title.substring(0, 26)}...`
                    : movie.title
                }
                titleStyle={{ fontSize: 18, marginLeft: 15 }}
                containerStyle={{ marginTop: 0 }}
                starValue={movie.vote_average / 2}
                votes={movie.vote_count}
                releaseDate={movie.release_date}
                ratingContainerStyle={{
                  flexDirection: 'row',
                }}
              />
            </TouchableOpacity>
          );
        })}
      {seeMore && (
        <LoadMoreButton
          style={{ marginBottom: 20 }}
          onPress={() => increasePage()}
        />
      )}
    </ScrollView>
  );
};
