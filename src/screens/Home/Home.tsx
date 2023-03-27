import { ScrollView } from 'react-native';
import { useDimensions, useAllGenres } from '../../utils/hooks';
import { useNewMovies } from './hooks/useNewMovies';
import { NewMoviesCarousel, NewMovie } from '../../components';
import { NewMoviesContainer, NewMoviesTitle } from './styles';

export const Home = () => {
  const { width } = useDimensions();
  const { itemsData } = useNewMovies();
  const { getGenreName } = useAllGenres();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {itemsData.length > 0 && (
        <NewMoviesContainer>
          <NewMoviesTitle>New Movies</NewMoviesTitle>
          <NewMoviesCarousel
            sliderWidth={width}
            itemWidth={0.7 * width}
            data={itemsData}
            RenderItem={NewMovie}
            getGenreName={getGenreName}
          />
        </NewMoviesContainer>
      )}
    </ScrollView>
  );
};
