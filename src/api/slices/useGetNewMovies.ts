import { apiSlice } from '../apiSlice';
import { API_KEY, LANG } from '../../utils/const/config';

export const useGetNewMovies = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNewMovies: builder.query({
      query: (page: number) =>
        `/movie/now_playing?api_key=${API_KEY}&language=${LANG}&page=${
          page || 1
        }`,
      transformResponse: (response: any) => {
        return response.results;
      },
    }),
  }),
});

export const { useLazyGetNewMoviesQuery } = useGetNewMovies;
