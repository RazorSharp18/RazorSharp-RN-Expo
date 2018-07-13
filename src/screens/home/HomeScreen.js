import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { RestaurantApi } from '../../../constants/api';
import { LoadingScreen } from '../../commons';
import { MyRestaurantList} from './components';
import styles from './styles/HomeScreen';
import { Button, Icon } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../../constants/Colors';

const restaurantApi = new RestaurantApi();

class HomeScreen extends Component {
    static defaultProps = {
        restaurantApi
    }

    static navigationOptions =  ({ navigation }) => {
        return {
            headerTitle: 
            <FontAwesome 
                name = "home"
                size = {25}
            />,
        headerStyle: {
            backgroundColor: Colors.$redColor
        },
        headerRight: (
                    <Button 
                        transparent 
                        onPress={() => navigation.navigate('CreateRestaurant')}
                    >
                        <Icon
                            name='md-add-circle'
                            style={{
                                fontSize: 30,
                                color: Colors.$whiteColor
                            }}
                        />
                    </Button>
        ),
        tabBarIcon: ({ tintColor }) => (
                <FontAwesome 
                    name = "home"
                    size = {25}
                    color = {tintColor}
                />
            ) 
        }
    }
    // static navigationOptions: ({ navigation }) => ({
    //     tabBarIcon: ({ focused, tintColor }) => {
    //       const { routeName } = navigation.state;
    //       let iconName;
    //       if (routeName === 'Home') {
    //         iconName = `ios-information-circle${focused ? '' : '-outline'}`;
    //       } else if (routeName === 'Settings') {
    //         iconName = `ios-options${focused ? '' : '-outline'}`;
    //       }

    state = {
        loading: false,
        restaurants: []
    } 

    async componentDidMount(){
        this.setState({ loading: true });
        const data = await this.props.restaurantApi.fetchRestaurants();
        this.setState( {loading: false, restaurants: data} );
    }

    render() {
        if( this.state.loading){
            return <LoadingScreen />;
          }
        return( 
            <View style={styles.root}>
                <View style = {styles.topContainer}>
                    <Text> HomeScreen </Text>
                </View>
                <View style = {styles.bottomContainer}>
                    <MyRestaurantList restaurants={this.state.restaurants} />
                </View>
            </View>
        );
    }
}

export default HomeScreen;