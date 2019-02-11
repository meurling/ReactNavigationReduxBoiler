import { createStackNavigator } from 'react-navigation';
import MapScreen from '../src/containers/map/MapScreen';

export const AppNavigator = createStackNavigator({
    MapScreen: MapScreen,
});
