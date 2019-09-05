import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';
import styled from 'styled-components/native';
import { Text, Alert } from 'react-native';

import {
  MaterialCommunityIcons,
  AntDesign,
  Foundation
} from '@expo/vector-icons';
//Helpers
import { red, darkGray, gray } from '../../util/helpers';
import { removeDeckEntry } from '../../util/api';
import { removeDeck } from '../../actions';

class DeckPage extends Component {
  shouldComponentUpdate(nextProps) {
    return typeof nextProps.deck !== 'undefined';
  }

  startQuiz = () => {
    const { deck, navigation } = this.props;
    navigation.navigate('Cards', {
      questions: deck.questions,
      name: deck.title
    });
  };

  deleteDeck = id => {
    const { remove, goBack } = this.props;

    remove();
    goBack();
    removeDeckEntry(id);
  };

  handleDeleteClick = () => {
    Alert.alert(
      `DELETE ${this.props.deck.title}`,
      'Would you like to delete this deck?',
      [
        {
          text: 'cancel',
          style: 'cancel'
        },
        { text: 'DELETE', onPress: () => this.deleteDeck(this.props.deck.id) }
      ],
      { cancelable: true }
    );
  };

  addNewCard = () => {
    const { deck, navigation } = this.props;
    navigation.navigate('NewCard', { deckId: deck.id });
  };

  render() {
    const { deck } = this.props;
    const { title, numOfCards } = deck;
    return (
      <Container style={{ flex: 1 }}>
        <BlcTitle>
          <Title>{title}</Title>
          <DetailsContent>
            <MaterialCommunityIcons name='cards' size={20} color={gray} />
            <Details>
              {numOfCards} {numOfCards > 1 ? 'cards' : 'card'}
            </Details>
          </DetailsContent>
        </BlcTitle>
        {numOfCards === 0 ? (
          <TextEmpty onPress={this.addNewCard}>
            <Text>This deck is still empty... Be the first to add a card!</Text>
          </TextEmpty>
        ) : (
          <BtnStartQuiz onPress={this.startQuiz}>
            <AntDesign name='playcircleo' size={70} />
            <Text>Start Quiz</Text>
          </BtnStartQuiz>
        )}
        <BlcButtoms>
          <BtnAddCard onPress={this.addNewCard}>
            <Foundation name='page-add' size={30} color={'#464646'} />
            <TextAdd>Add Card</TextAdd>
          </BtnAddCard>
          <BtnRemoveDeck onPress={this.handleDeleteClick}>
            <AntDesign name='delete' size={20} color={red} />
            <TextDelete>Delete Deck</TextDelete>
          </BtnRemoveDeck>
        </BlcButtoms>
      </Container>
    );
  }
}

const mapStateToProps = (store, { navigation }) => {
  const deck = store[navigation.state.params.deckId];
  return { deck };
};

const mapDispatchToProps = (dispatch, { navigation }) => {
  const { deckId } = navigation.state.params;

  return {
    remove: () => dispatch(removeDeck(deckId)),
    goBack: () => navigation.goBack()
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckPage);

/**
 * Styled Components
 */
const Container = styled.View`
  background-color: #43b2a1;
`;

const BlcTitle = styled.View`
  flex: 2;
  justify-content: center;
`;

const BlcButtoms = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
`;

const Texts = styled.Text`
  color: ${darkGray};
  text-align: center;
`;

const Title = styled(Texts)`
  font-size: 48px;
`;

const DetailsContent = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Details = styled(Texts)`
  font-size: 18px;
  margin-left: 10px;
  color: ${gray};
`;

const BtnStartQuiz = styled.TouchableOpacity`
  flex: 2;
  align-items: center;
`;
const TextEmpty = styled(BtnStartQuiz)`
  font-size: 18px;
  color: brown;
`;

const BtnAddCard = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TextAdd = styled.Text`
  font-size: 10;
  color: #464646;
`;

const TextDelete = styled(TextAdd)`
  color: ${red};
`;

const BtnRemoveDeck = styled(BtnAddCard)`
  color: red;
`;
