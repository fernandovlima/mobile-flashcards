import React from 'react';

import { View, StyleSheet } from 'react-native';
import { SubmitBtn } from '../../shared/SubmitBtn';
import { Result, ResultTxt, ScoreTxt } from './CardStyles';

const CardResult = ({ total, corrects, restart, goBack }) => {
  const finalScore = Math.round((corrects / total) * 100);

  const greatz = () => {
    if (finalScore === 0) return 'That is bad ? \n\n 😑';
    if (finalScore < 50) return 'Ops... \nYou should try again\n\n 🤔';
    if (finalScore < 70) return 'Almost there!\n Keep this way!\n\n 😉';
    if (finalScore < 99) return 'Awesome! \n You are so smart !\n\n 😘';

    return 'Niceeee!\n You are the best! \n\n🤩';
  };

  return (
    <Result>
      <View style={styles.blcScore}>
        <ResultTxt>{greatz()}</ResultTxt>
        <ScoreTxt>
          You scored {corrects} of {total}
        </ScoreTxt>
      </View>
      <View style={styles.blcButtoms}>
        <SubmitBtn onPress={restart} style={styles.btnPlayAgain} textSize={18}>
          Play Again!
        </SubmitBtn>
        <SubmitBtn
          onPress={goBack}
          style={styles.btnGoHome}
          textColor={'#999'}
          textSize={12}
        >
          Back to Deck Page
        </SubmitBtn>
      </View>
    </Result>
  );
};

export default CardResult;

/**
 * Styled Components
 */

const styles = StyleSheet.create({
  blcScore: {
    flex: 2,
    justifyContent: 'center'
  },
  blcButtoms: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  btnPlayAgain: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    padding: 10,
    width: 150
  },
  btnGoHome: {
    backgroundColor: 'rgba(0,0,0, 0.5)',
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
    width: 150
  }
});
