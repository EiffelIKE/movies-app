import { apiSlice } from '../apiSlice';
import { API_KEY, LANG } from '../../utils/const/config';

export const useMoviesByGenres = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMoviesByGenre: builder.query({
      query: (id: number) =>
        `/discover/movie?api_key=${API_KEY}&with_genres=${id}&language=${LANG}`,
      transformResponse: (response: any) => {
        return response.results;
      },
    }),
  }),
});

export const { useLazyGetMoviesByGenreQuery } = useMoviesByGenres;
