import type { Trailer, TrailerList } from '../types';

export const getTrailerKey = (data: TrailerList) => {
  const firstyoutube: TrailerList = [];
  const youtubeTrailers: TrailerList = data.filter(
    (item: Trailer) => item.site === 'YouTube' && item.official
  );

  if (youtubeTrailers.length > 0) {
    firstyoutube.push(youtubeTrailers[0]);
  }

  const key = firstyoutube.length === 1 ? firstyoutube[0].key : '';

  return { key };
};
