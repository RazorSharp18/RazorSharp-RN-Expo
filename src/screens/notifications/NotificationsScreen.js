import React, { Component } from "react";
import { View, Text } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '../../../constants/Colors';

class NotificationsScreen extends Component {
    state = {  }

    static navigationOptions = {
        headerStyle: {
            backgroundColor: Colors.$redColor
        },
        tabBarIcon: ({ tintColor }) => (
                <MaterialIcons 
                    name = "notifications"
                    size = {25}
                    color = {tintColor}
                />
            ) 
    }
    
    render() {
        return (
            <View style={ {flex: 1} }>
                <Text> NotificationsScreen </Text>
            </View>
        );
    }
}

export default NotificationsScreen;