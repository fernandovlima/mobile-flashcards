import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store';
import StackNav from './src/navigation/';
import FlashCardStatusBar from './src/navigation/FlashcardStatusBar';

export default function App() {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <FlashCardStatusBar backgroundColor={'#fff'} barStyle='light-content' />
        <StackNav />
      </View>
    </Provider>
  );
}
