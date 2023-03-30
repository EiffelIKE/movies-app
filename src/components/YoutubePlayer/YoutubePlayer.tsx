import { FC } from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';
import type { PlayerProps } from './types';

export const YoutubePlayer: FC<PlayerProps> = ({ trailer, width, height }) => {
  return (
    <View style={{ height }}>
      <WebView
        style={{ width }}
        source={{ uri: `https://www.youtube.com/embed/${trailer}` }}
      />
    </View>
  );
};
