import { StackNavigator } from 'react-navigation';
import HomeNavigator from './HomeNavigator';

import {
    CreateRestaurantScreen
} from '../screens';

export default StackNavigator({
    Home: { screen: HomeNavigator },
    CreateRestaurant: { screen: CreateRestaurantScreen }
}, {
    mode: 'modal'
});