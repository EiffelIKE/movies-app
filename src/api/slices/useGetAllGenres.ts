import { apiSlice } from '../apiSlice';
import { API_KEY, LANG } from '../../utils/const/config';

export const useGetAllGenres = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllGenres: builder.query({
      query: () => `/genre/movie/list?api_key=${API_KEY}&language=${LANG}`,
      transformResponse: (response: any) => {
        return response.genres;
      },
    }),
  }),
});

export const { useLazyGetAllGenresQuery } = useGetAllGenres;
