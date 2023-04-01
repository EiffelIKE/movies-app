import { apiSlice } from '../apiSlice';
import { API_KEY, LANG } from '../../utils/const/config';

export const useGetPopularMovies = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPopularMovies: builder.query({
      query: (page: number | undefined) =>
        `/movie/popular?api_key=${API_KEY}&language=${LANG}&page=${page || 1}`,
      transformResponse: (response: any) => {
        return response;
      },
    }),
  }),
});

export const { useLazyGetPopularMoviesQuery } = useGetPopularMovies;
