import React from 'react';
import { View, StatusBar } from 'react-native';

const FlashCardStatusBar = ({ backgroundColor, ...props }) => {
  return (
    <View style={{ backgroundColor, height: 50 }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
};

export default FlashCardStatusBar;
