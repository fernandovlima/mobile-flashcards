import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store';
import Stack from './src/navigation/index';
import FlashCardStatusBar from './src/navigation/FlashcardStatusBar';

export default function App() {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <FlashCardStatusBar backgroundColor={'#fff'} barStyle='light-content' />
        <Stack />
      </View>
    </Provider>
  );
}
