// export const fetchRestaurantList = () =>
//     fetch("http://localhost:3001/restaurants/")
//         .then(response => response.json());

import axios from 'axios';
import { Platform } from 'react-native';

let url;

if (Platform.OS !== 'ios'){
    url = 'http://127.0.0.1:3000/api';
}else {
    url = 'http://localhost:3001'; 
}


axios.defaults.baseURL = url;

const fakeRestaurantId = '5af20ff1c76386e0339e2d8e';

class RestaurantApi{
    constructor() {
        this.restaurantId = fakeRestaurantId;
        this.path = '/restaurants';
    }

    async fetchRestaurants() {
        try{
            const { data } = await axios.get(this.path);
            return data;
        } catch (e){
            console.log(e);
        }
    }

    async createRestaurants() {
        try{
            const response = await axios.post(`${this.path}`, {...arguments[0] });
            console.log(response);
            return response;
        } catch (e){
            console.log(e);
        }
    }
}

export { RestaurantApi }; 