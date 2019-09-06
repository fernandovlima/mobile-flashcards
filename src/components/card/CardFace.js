import React from 'react';

import { View, StyleSheet } from 'react-native';
import { ButtonDefault } from '../utils/ButtonDefault';
import { Face, QuestionTxt } from './CardStyles';

const CardFace = ({ flip, card }) => {
  return (
    <Face>
      <View style={styles.blcQuestion}>
        <QuestionTxt>{card}</QuestionTxt>
      </View>
      <View style={styles.blcButtom}>
        <ButtonDefault
          onPress={flip}
          style={styles.btnViewAnswer}
          textColor={'#fff'}
        >
          Show Answer
        </ButtonDefault>
      </View>
    </Face>
  );
};

export default CardFace;

/**
 * StylesSheet
 */

const styles = StyleSheet.create({
  blcQuestion: {
    flex: 2,
    justifyContent: 'center'
  },
  blcButtom: {
    flex: 1,
    alignItems: 'center'
  },
  btnViewAnswer: {
    backgroundColor: '#4aa',
    borderRadius: 5,
    padding: 10,
    width: 150
  }
});
