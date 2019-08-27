import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export function ButtonDefault({ onPress, textColor, textSize, ...props }) {
  const styles = StyleSheet.create({
    textStyle: {
      fontSize: textSize ? textSize : 20,
      textAlign: 'center',
      color: textColor ? textColor : '#445'
    }
  });

  return (
    <TouchableOpacity onPress={onPress} {...props}>
      <Text style={styles.textStyle}>{props.children}</Text>
    </TouchableOpacity>
  );
}
