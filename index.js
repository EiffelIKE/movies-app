/**
 * @format
 */

import { AppRegistry } from 'react-native';
import Main from './main';
import { name as appName } from './app.json';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => Main);
