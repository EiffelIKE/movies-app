import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackProps } from '../types';

export type Props = NativeStackScreenProps<RootStackProps>;
export type Screen = 'home' | 'news' | 'populars';
