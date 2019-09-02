import React from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView
} from 'react-native';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo';
import ButtonDefault from '../utils/ButtonDefault';

export function NewCard() {
  state = {
    card: {
      question: '',
      answer: ''
    }
  };

  submit = () => {
    const { deckId } = this.props;
    const { card } = this.state;

    Keyboard.dismiss();

    //add into redux store
    this.props.dispatch(addCard(deckId, card));
    this.props.navigation.goBack();

    submitCardEntry({
      key: deckId,
      entry: card
    });
  };

  handleInputChange = (input, name) => {
    this.setState(state => ({
      ...state,
      card: {
        ...state.card,
        [name]: input
      }
    }));
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <LinearGradient
        colors={getBackgroundColor(cardColor)}
        style={{ flex: 1 }}
      >
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
          <View style={styles.form}>
            <ContainerInput>
              <Input
                value={card.question}
                onChangeText={e => this.handleInputChange(e, 'question')}
                placeholder={'What question would you like to ask?'}
              />
            </ContainerInput>
            <ContainerInput style={{ marginTop: 20 }}>
              <Input
                value={card.answer}
                onChangeText={e => this.handleInputChange(e, 'answer')}
                placeholder={'And the answer is...'}
              />
            </ContainerInput>
          </View>
          <View style={{ flex: 1 }}>
            <ButtonDefault style={styles.buttonSubmit} onPress={this.submit}>
              Add Card
            </ButtonDefault>
          </View>
        </KeyboardAvoidingView>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}

//components
const Input = styled.TextInput`
  font-size: 18px;
  color: #fff;
  padding: 5px 10px;
  width: 300px;
`;

const ContainerInput = styled.View`
  border-bottom-color: #aaa;
  border-bottom-width: 1px;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  form: {
    flex: 3,
    justifyContent: 'center'
  },
  buttonSubmit: {
    width: 100,
    alignItems: 'center',
    fontSize: 16,
    fontWeight: '700',
    marginTop: 15,
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(200, 200, 200, 0.8)'
  }
});
