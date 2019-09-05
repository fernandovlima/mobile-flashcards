import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store';
import AppContainer from './src/navigation/';
import FlashCardStatusBar from './src/navigation/FlashcardStatusBar';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <FlashCardStatusBar
            backgroundColor={'#fff'}
            barStyle='light-content'
          />
          <AppContainer />
        </View>
      </Provider>
    );
  }
}
