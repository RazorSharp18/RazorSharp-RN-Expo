import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles/CreateRestaurantScreen';
import { FormInput, FormLabel, Button } from 'react-native-elements'

import Colors from '../../../constants/Colors';
import { RestaurantApi } from '../../../constants/api';

const restaurantApi = new RestaurantApi();
class CreateRestaurantScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Create a new Restaurant',
            headerTitleStyle: {
                color: Colors.$whiteColor,
            },
            headerStyle: {
                backgroundColor: Colors.$redColor
            },
            headerLeft: (

                <TouchableOpacity style={styles.marginLeft3} onPress={() => navigation.goBack()}>
                    <MaterialIcons
                        name='close'
                        style={{
                            fontSize: 30,
                            color: Colors.$whiteColor
                        }}
                    />
                </TouchableOpacity> 
            )
        }
    }

    state = {
        name: '',
        description: ''
    }

    _changeTitle = name => this.setState({ name });
    _changeDescription = description => this.setState({ description });
    _checkIfButtonSubmitDisabled() {
        const { name, description } = this.state;
    
        if (name.length > 5 && description.length > 5) {
          return false;
        }
        return true;
      }

      _createRestaurant = async () => {
        const { name, description } = this.state;
        // const data = await this.props.restaurantApi.fetchRestaurants();
        const res = await restaurantApi.createRestaurants({
          name,
          description
        });
    
        console.log(res);
      }
    render() {
        console.log(this.state);
        return (
            <View style={styles.root}>
                <View style={styles.container}>
                    <View style={styles.item}>
                        <FormLabel fontFamily= 'montserrat'> Title </FormLabel>
                        <FormInput
                            selectionColor= {Colors.$redColor}
                            onChangeText={this._changeTitle}
                            value={this.state.name}
                        />
                    </View>  
                    <View style={styles.item}>
                        <FormLabel fontFamily= 'montserrat'> Description </FormLabel>
                        <FormInput 
                            selectionColor= {Colors.$redColor}
                            multiline
                            onChangeText={this._changeDescription}
                            value={this.state.description}
                        />
                    </View> 
                    <View >
                        <Button 
                            title= 'Pick a restaurant'
                            raised
                            fontFamily= 'montserrat'
                        />                        
                    </View> 
                    <View style= {styles.buttonCreate}>
                        <Button 
                            backgroundColor= {Colors.$blackBlueColor}
                            title= 'Create a restaurant'
                            raised
                            fontFamily= 'montserrat'
                            disabled= {this._checkIfButtonSubmitDisabled()}
                            onPress= {this._createRestaurant}
                        />                        
                    </View> 
                </View>  
            </View>    
        );
    }
}

export default CreateRestaurantScreen;