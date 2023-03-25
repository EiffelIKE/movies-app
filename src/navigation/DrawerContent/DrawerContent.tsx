import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Drawer } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';
import type { RootStackProps } from '../StackNavigation';

type Props = NativeStackScreenProps<RootStackProps>;
type Screen = 'home' | 'news' | 'populars';

export const DrawerContent = () => {
  const navigation = useNavigation<Props['navigation']>();
  const [activeScreen, setActiveScreen] = useState<string>('home');

  const handlePress = (screen: Screen) => {
    navigation.navigate(screen);
    setActiveScreen(screen);
  };

  return (
    <DrawerContentScrollView>
      <Drawer.Section>
        <Drawer.Item
          label="Home"
          active={activeScreen === 'home'}
          onPress={() => handlePress('home')}
        />
        <Drawer.Item
          label="New Movies"
          active={activeScreen === 'news'}
          onPress={() => handlePress('news')}
        />
        <Drawer.Item
          label="Populars"
          active={activeScreen === 'populars'}
          onPress={() => handlePress('populars')}
        />
      </Drawer.Section>
    </DrawerContentScrollView>
  );
};
