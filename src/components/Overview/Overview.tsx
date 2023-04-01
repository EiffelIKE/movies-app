import { FC } from 'react';
import type { OverviewProps } from './types';
import { OverviewContainer, Description, LaunchDate } from './styles';

export const Overview: FC<OverviewProps> = ({
  decription,
  releaseDate,
  descriptionStyle,
  launchStyle,
}) => {
  return (
    <OverviewContainer>
      {!!decription && (
        <Description style={descriptionStyle}>{decription}</Description>
      )}
      {!!releaseDate && (
        <LaunchDate style={launchStyle}>Release Date: {releaseDate}</LaunchDate>
      )}
    </OverviewContainer>
  );
};
