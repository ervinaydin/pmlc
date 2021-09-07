import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import PlacesListScreen from '../screens/PlacesListScreen';
import NewPlaceScreen from '../screens/NewPlaceScreen';
import PlaceDetailScreen from '../screens/PlaceDetailScreen';
import MapScreen from '../screens/MapScreen';

import { Platform } from 'react-native';

const PlacesNavigator = createStackNavigator({
    Places: PlacesListScreen,
    PlaceDetails: PlaceDetailScreen,
    NewPlace: NewPlaceScreen,
    Map: MapScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: 'white'
        },
        headerTintColor: 'grey'

    }
});

export default createAppContainer(PlacesNavigator);

