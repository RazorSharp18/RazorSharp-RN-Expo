import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RestaurantApi } from '../../../constants/api';
import { LoadingScreen } from '../../commons';
import { MyRestaurantList} from './components';
import styles from './styles/HomeScreen';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
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
                    <TouchableOpacity style={styles.marginRight3p} onPress={() => navigation.navigate('CreateRestaurant')}>
                        <MaterialIcons
                            name='add-circle'
                            style={{
                                fontSize: 30,
                                color: Colors.$whiteColor
                            }}
                        />
                    </TouchableOpacity>    
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