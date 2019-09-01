import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}></View>
    </Provider>
  );
}
