import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Back, AnswerTxt } from './CardStyles';
import { ButtonDefault } from '../utils/ButtonDefault';

const CardBack = ({ handleAnswer, card }) => {
  handleCorrectAnswer = () => {
    return handleAnswer(true);
  };

  handleWrongAnswer = () => {
    return handleAnswer(false);
  };

  return (
    <Back>
      <View style={styles.blcAnswer}>
        <AnswerTxt>{card}</AnswerTxt>
      </View>
      <View style={styles.btnContent}>
        <ButtonDefault
          onPress={handleCorrectAnswer}
          textColor={'#42a'}
          style={styles.btnCorrect}
        >
          Correct
        </ButtonDefault>
        <ButtonDefault
          onPress={handleWrongAnswer}
          textColor={'#fff'}
          style={styles.btnWrong}
        >
          Incorrect
        </ButtonDefault>
      </View>
    </Back>
  );
};

export default CardBack;

/**
 * StylesSheet
 */

const styles = StyleSheet.create({
  blcAnswer: {
    flex: 2,
    justifyContent: 'center'
  },
  btnContent: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  btnCorrect: {
    backgroundColor: '#4a2',
    padding: 10,
    width: 150,
    borderRadius: 5
  },
  btnWrong: {
    backgroundColor: '#ff0000',
    padding: 10,
    width: 150,
    borderRadius: 5
  }
});
