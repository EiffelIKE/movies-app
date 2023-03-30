import { FC } from 'react';
import type { OverviewProps } from './types';
import { OverviewContainer, Description, LaunchDate } from './styles';

export const Overview: FC<OverviewProps> = ({ decription, releaseDate }) => {
  return (
    <OverviewContainer>
      <Description>{decription}</Description>
      <LaunchDate>Release Date: {releaseDate}</LaunchDate>
    </OverviewContainer>
  );
};
