import React, { PureComponent, Fragment } from 'react';

import { connect } from 'react-redux';
import {
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  KeyboardAvoidingView,
  Keyboard
} from 'react-native';

import styled from 'styled-components/native';
import { submitDeckEntry } from '../../util/api';
import { getBackgroundColor, red, deckColor } from '../../util/helpers';
import { ButtonDefault } from '../utils/ButtonDefault';
import { addDeck } from '../../actions';

class NewDeck extends PureComponent {
  state = {
    deck: {
      id: '',
      title: '',
      numOfCards: 0,
      questions: []
    },
    msg: ''
  };

  handleInputChange = input => {
    //remove white space between words
    const id = input.replace(/\s+/g, '');
    this.setState(state => ({
      ...state,
      deck: {
        ...state.deck,
        id,
        title: input
      },
      msg: ''
    }));
  };

  submit = () => {
    const key = this.state.deck.id;
    const entry = this.state.deck;

    //Verify empty title
    if (this.state.deck.title === '') {
      return this.setState(() => ({
        msg: 'You must provide a valid title to your deck.'
      }));
    }

    //verify if Deck already exists in Store
    if (typeof this.props.decks[key] !== 'undefined') {
      return this.setState(() => ({
        msg: 'This title is in use. Please choose another.'
      }));
    }

    this.props.dispatch(
      addDeck({
        [key]: entry
      })
    );

    Keyboard.dismiss();

    this.goToDeckPage(key, entry.title);

    //Send the newest Deck to API (AsyncStorage)
    submitDeckEntry({ key, entry });
  };

  goToDeckPage = (deckId, name) => {
    this.props.navigation.navigate('DeckPage', { deckId, name });
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Container style={{ flex: 1 }}>
          <KeyboardAvoidingView
            behavior='padding'
            style={styles.container}
            onPress={() => Keyboard.dismiss()}
          >
            <View style={styles.blcForm}>
              <Question>Get a nice title!</Question>
              <InputContainer>
                <Input
                  value={this.state.deck.title}
                  onChangeText={this.handleInputChange}
                  placeholder={'My wonderful deck title is...'}
                />
              </InputContainer>
              <MsgError>{this.state.msg}</MsgError>
            </View>
            <View style={{ flex: 1 }}>
              <ButtonDefault style={styles.btnSubmit} onPress={this.submit}>
                Create Deck
              </ButtonDefault>
            </View>
          </KeyboardAvoidingView>
        </Container>
      </TouchableWithoutFeedback>
    );
  }
}

function mapStateToProps(state) {
  return {
    decks: state
  };
}

export default connect(mapStateToProps)(NewDeck);

/**
 * Styled Components
 */
const Container = styled.View`
  background-color: #43b2a1;
`;

const Question = styled.Text`
  justify-content: center;
  align-content: center;
  text-align: center;
  font-size: 24;
  color: white;
  font-weight: bold;
`;

const Input = styled.TextInput`
  font-size: 21;
  color: #ffffff;
  padding: 5px 10px;
  width: 300;
`;

const InputContainer = styled.View`
  margin-top: 150;
  border-bottom-color: #ccc;
  border-bottom-width: 1px;
`;

const MsgError = styled.Text`
  color: ${red};
  margin-right: 10;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 25
  },
  blcForm: {
    flex: 3,
    justifyContent: 'center'
  },
  btnSubmit: {
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 50,
    fontWeight: '700',
    marginTop: 15,
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    width: 100
  }
});
