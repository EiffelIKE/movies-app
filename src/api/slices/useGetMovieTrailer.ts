import { apiSlice } from '../apiSlice';
import { API_KEY, LANG } from '../../utils/const/config';

export const useGetMovieTrailer = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMovieTrailer: builder.query({
      query: (id: number) =>
        `/movie/${id}/videos?api_key=${API_KEY}&language=${LANG}`,
      transformResponse: (response: any) => {
        return response.results;
      },
    }),
  }),
});

export const { useLazyGetMovieTrailerQuery } = useGetMovieTrailer;
