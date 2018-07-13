import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Icon } from 'native-base';

import Colors from '../../../constants/Colors';
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
                <Button 
                    transparent 
                    onPress={() => navigation.goBack()}
                >
                    <Icon
                        name='md-close'
                        style={{
                            fontSize: 30,
                            color: Colors.$whiteColor
                        }}
                    />
                </Button>
            )
        }
    }
    render() {
        return (
            <View>
                <Text> Hello Anvesh </Text>
            </View>    
        );
    }
}

export default CreateRestaurantScreen;