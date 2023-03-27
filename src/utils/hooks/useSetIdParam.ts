import { useNavigation } from '@react-navigation/native';
import type { Navigation } from '../types';

export const useSetIdParam = () => {
  const { navigate } = useNavigation<Navigation>();

  const setIdNavigate = (id: number) => {
    navigate('movie', { id });
  };

  return { setIdNavigate };
};
