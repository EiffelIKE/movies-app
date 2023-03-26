import { ScrollView, Text, View } from 'react-native';
import { useNewMovies } from './hooks/useNewMovies';
import { NewMoviesContainer, NewMoviesTitle } from './styles';

export const Home = () => {
  const { newMovies } = useNewMovies();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {newMovies.length > 0 && (
        <NewMoviesContainer>
          <NewMoviesTitle>New Movies</NewMoviesTitle>
          <Text>{newMovies.length}</Text>
        </NewMoviesContainer>
      )}
    </ScrollView>
  );
};
