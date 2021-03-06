import { TabNavigator } from 'react-navigation';
import { HomeScreen,
         NotificationsScreen,
         ProfileScreen
 } from '../screens';
 import Colors from "../../constants/Colors";

export default TabNavigator({
    Home: {
        screen: HomeScreen,
    },
    Notifications: {
        screen: NotificationsScreen,
    },
    Profile: {
        screen: ProfileScreen
    }
},
{
    swipeEnabled: false,
    animationEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
        showLabel: false,
        showIcon: true,
        unselectedItemTintColor: Colors.$blackBlueColor,
        activeTintColor: Colors.$redColor,
        indicatorStyle: { backgroundColor: Colors.$redColor},
        pressColor: Colors.$redColor,
        Style: {
            backgroundColor: Colors.$whiteColor
        }
    }
});
