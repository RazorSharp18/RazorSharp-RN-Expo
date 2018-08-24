import Exponent, { AppLoading } from 'expo';
import React from 'react';
// import { Provider } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';

// import HomeScreen from './src/screens/home/HomeScreen';
import Root from './src/Root';

import Colors from './constants/Colors';
import { fontAssets } from './helpers';
// import store from './src/redux/store';

EStyleSheet.build(Colors);

export default class App extends React.Component {

  state = {
    fontLoaded: false
  }

  componentDidMount() {
    this._loadAssetsAsync();
  }
 
  async _loadAssetsAsync() {
    await Promise.all(fontAssets);

    this.setState({ fontLoaded: true });
  }

  render(){
    if(!this.state.fontLoaded){
      return <AppLoading />
    }
    return <Root />;
  }
}

Exponent.registerRootComponent(App);