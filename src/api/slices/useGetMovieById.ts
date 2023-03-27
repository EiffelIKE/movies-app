import { apiSlice } from '../apiSlice';
import { API_KEY, LANG } from '../../utils/const/config';

export const useGetMovieById = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMoviesById: builder.query({
      query: (id: number) => `/movie/${id}?api_key=${API_KEY}&language=${LANG}`,
      transformResponse: (response: any) => {
        return response;
      },
    }),
  }),
});

export const { useLazyGetMoviesByIdQuery } = useGetMovieById;
