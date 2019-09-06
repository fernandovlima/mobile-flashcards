import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView
} from 'react-native';
import styled from 'styled-components/native';
import { submitCardEntry } from '../../util/api';
import { getBackgroundColor, cardColor } from '../../util/helpers';
import { addCard } from '../../actions';
import { ButtonDefault } from '../utils/ButtonDefault';

class NewCard extends Component {
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
  render() {
    const { card } = this.state;
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Container colors={getBackgroundColor(cardColor)} style={{ flex: 1 }}>
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
        </Container>
      </TouchableWithoutFeedback>
    );
  }
}

function mapStateToProps(store, { navigation }) {
  const { deckId } = navigation.state.params;
  return {
    deckId
  };
}

export default connect(mapStateToProps)(NewCard);

//components
const Container = styled.View`
  background-color: #43b2a1;
`;

const Input = styled.TextInput`
  font-size: 18px;
  color: #fff;
  padding: 5px 10px;
  width: 300px;
`;

const ContainerInput = styled.View`
  border-bottom-color: #fff;
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
    backgroundColor: 'rgba(100, 100, 200, 0.8)'
  }
});
