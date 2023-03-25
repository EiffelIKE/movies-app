import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigation } from './StackNavigation';
import { DrawerContent } from './DrawerContent';

const Drawer = createDrawerNavigator();

export const Navigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="home"
      drawerContent={() => <DrawerContent />}
    >
      <Drawer.Screen
        name="Movies"
        component={StackNavigation}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};
