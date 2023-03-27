import { ScrollView } from 'react-native';
import { useDimensions, useAllGenres, useSetIdParam } from '../../utils/hooks';
import { useNewMovies, useActiveGenre } from './hooks';
import {
  MoviesCarousel,
  NewMovie,
  SectionContainer,
  GenresList,
  MoviesByGenre,
} from '../../components';

export const Home = () => {
  const { width } = useDimensions();
  const { itemsData } = useNewMovies();
  const { allGenres, getGenreName } = useAllGenres();
  const { activeGenre, handleActiveGenre, moviesByGenre } = useActiveGenre();
  const { setIdNavigate } = useSetIdParam();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {itemsData.length > 0 && (
        <SectionContainer title="New Movies">
          <MoviesCarousel
            sliderWidth={width}
            itemWidth={0.7 * width}
            data={itemsData}
            RenderItem={NewMovie}
            getGenreName={getGenreName}
            onPress={(id: number) => setIdNavigate(id)}
          />
        </SectionContainer>
      )}
      {allGenres.length > 0 && (
        <SectionContainer
          title="Movies by Genre"
          containerStyle={{ marginTop: 30, marginBottom: 30 }}
        >
          <GenresList
            data={allGenres}
            activeGenre={activeGenre}
            onPress={handleActiveGenre}
          />
          {moviesByGenre.length > 0 && (
            <MoviesCarousel
              sliderWidth={width}
              itemWidth={0.3 * width}
              data={moviesByGenre}
              firstItem={1}
              inactiveSlideScale={1}
              inactiveSliderOpacity={1}
              onPress={(id: number) => setIdNavigate(id)}
              RenderItem={MoviesByGenre}
            />
          )}
        </SectionContainer>
      )}
    </ScrollView>
  );
};
