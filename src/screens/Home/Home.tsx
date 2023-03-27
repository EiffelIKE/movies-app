import { ScrollView } from 'react-native';
import { useDimensions, useAllGenres, useSetIdParam } from '../../utils/hooks';
import { useNewMovies, useActiveGenre } from './hooks';
import {
  NewMoviesCarousel,
  NewMovie,
  SectionContainer,
  GenresList,
} from '../../components';

export const Home = () => {
  const { width } = useDimensions();
  const { itemsData } = useNewMovies();
  const { allGenres, getGenreName } = useAllGenres();
  const { activeGenre, handleActiveGenre } = useActiveGenre();
  const { setIdNavigate } = useSetIdParam();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {itemsData.length > 0 && (
        <SectionContainer title="New Movies">
          <NewMoviesCarousel
            sliderWidth={width}
            itemWidth={0.7 * width}
            data={itemsData}
            RenderItem={NewMovie}
            getGenreName={getGenreName}
            onPress={(id: number) => setIdNavigate(id)}
          />
        </SectionContainer>
      )}
      <SectionContainer title="Movies by Genre">
        <GenresList
          data={allGenres}
          activeGenre={activeGenre}
          onPress={handleActiveGenre}
        />
      </SectionContainer>
    </ScrollView>
  );
};
