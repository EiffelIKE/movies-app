import { useContext, FC } from 'react';
import { Rating } from 'react-native-ratings';
import { ThemeContext } from '../../Theme/context';
import { RatingContainer, VoteCount } from './styles';
import type { RatingMovieProps } from './types';

import DARK_STAR from '../../assets/starDark.png';
import LIGTH_STAR from '../../assets/starLight.png';
import { Genre } from '../Genre';

export const RatedMovie: FC<RatingMovieProps> = ({ starValue, votes }) => {
  const { active, theme } = useContext(ThemeContext);
  return (
    <RatingContainer>
      <Rating
        type="custom"
        ratingImage={active === 'dark' ? DARK_STAR : LIGTH_STAR}
        ratingColor={theme.ratingColor}
        ratingBackgroundColor={theme.ratingBGColor}
        startingValue={starValue}
        imageSize={20}
        style={{ marginLeft: 20, marginRight: 15 }}
      />
      <VoteCount>{starValue}</VoteCount>
      <Genre textStyle={{ fontSize: 14 }}>{votes} votes</Genre>
    </RatingContainer>
  );
};
