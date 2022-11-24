/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import LifeCycle from './src/LifeCycle';
import TestLifeCycle from './src/TestLifeCycle';
import TestCallAPI from './src/TestCallAPI';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => TestCallAPI);
