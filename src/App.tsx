import { SafeAreaView, Text } from 'react-native';
import { Button } from 'react-native-paper';

export const App = () => {
  return (
    <SafeAreaView>
      <Text>Movies App</Text>
      <Button
        icon="abacus"
        mode="contained"
        onPress={() => console.log('Pressed')}
        style={{ width: '50%', alignSelf: 'center', marginTop: 20 }}
      >
        Press Me
      </Button>
    </SafeAreaView>
  );
};
