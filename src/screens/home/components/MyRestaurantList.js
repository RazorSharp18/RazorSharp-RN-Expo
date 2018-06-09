import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles/MyRestaurantList';

const MyRestaurantsList = ({ restaurants }) => (
  <View style={styles.root}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>My Restaurants</Text>
    </View>
    <View style={styles.contentContainer}>
      <ScrollView horizontal>
        {restaurants.map((restaurant, i) => (
          <View key={i} style={styles.restaurantCard}>
            <View style={styles.restaurantCardTopContainer}>
              <Text style={styles.restaurantCardTitle}>
                {"Restaurant Title"}
              </Text>
            </View>

            <View style={styles.restaurantCardBottomContainer}>
              <Text style={styles.restaurantCardMetaName}>
                {restaurant.name}
              </Text>
              <Text style={styles.restaurantCardMetaDate}>
                Mar 2m 6:00pm
              </Text>
            </View>

          </View>
        ))}
      </ScrollView>
    </View>
  </View>
);

export default MyRestaurantsList;