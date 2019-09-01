import React from 'react';

import { connect } from 'react-redux';

import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
//Helpers
import { darkGray, gray } from '../../util/helpers';

const Deck = ({ id, deck, navigation }) => {
  const goToDeckPage = () => {
    navigation.navigate('DeckPage', { deckId: id, name: deck.title });
  };

  const { title, numOfCards } = deck;

  return (
    <DeckBox onPress={goToDeckPage}>
      <Title>{title}</Title>
      <ContainerDetails>
        <MaterialCommunityIcons name='cards' size={20} color={gray} />
        <Details>
          {numOfCards} {numOfCards > 1 ? 'cards' : 'card'}
        </Details>
      </ContainerDetails>
    </DeckBox>
  );
};

const mapStateToProps = (store, { id }) => {
  const deck = store[id];
  return { deck };
};

export default connect(mapStateToProps)(Deck);

/**
 * Styled Components
 */

const DeckBox = styled.TouchableOpacity`
  padding-bottom: 10px;
  margin: 5px 10px;
  align-items: center;
  border-radius: 5px;
  background-color: white;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${darkGray};
  border-radius: 5px;
`;

const ContainerDetails = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Details = styled.Text`
  font-size: 18px;
  color: ${gray};
  margin-left: 5px;
`;
