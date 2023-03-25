import { useState } from 'react';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Drawer, TouchableRipple, Text, Switch } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useThemeContext } from '../../Theme/context';
import { SwitchContainer } from './styles';
import type { Props, Screen } from './types';

export const DrawerContent = () => {
  const navigation = useNavigation<Props['navigation']>();
  const { active, toggleTheme } = useThemeContext();
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
          label="Popular"
          active={activeScreen === 'populars'}
          onPress={() => handlePress('populars')}
        />
      </Drawer.Section>
      <Drawer.Section title="Options">
        <TouchableRipple>
          <SwitchContainer>
            <Text>{`${active === 'dark' ? 'Dark' : 'Ligth'} Theme`}</Text>
            <Switch
              value={active === 'dark'}
              onValueChange={() => toggleTheme()}
            />
          </SwitchContainer>
        </TouchableRipple>
      </Drawer.Section>
    </DrawerContentScrollView>
  );
};
