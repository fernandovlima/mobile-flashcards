import React, { Component } from 'react';

import { connect } from 'react-redux';
import { LinearGradient, AppLoading } from 'expo';
import { Feather } from '@expo/vector-icons';
import { Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { fetchDeckResults } from '../../util/api';
import { getBackgroundColor, deckColor } from '../../util/helpers';
import { receiveDecks } from '../../actions';
import Deck from './Deck';

class DecksList extends Component {
  state = {
    ready: false
  };

  componentDidMount() {
    const { dispatch } = this.props;
    fetchDeckResults()
      .then(decks => {
        dispatch(receiveDecks(decks));
      })
      .then(() => this.setState(() => ({ ready: true })));
  }

  renderItem = ({ item }) => {
    return (
      <Deck key={item.id} id={item.id} navigation={this.props.navigation} />
    );
  };

  render() {
    const { ready } = this.state;
    const { decks, navigation } = this.props;
    if (ready === false) {
      return <AppLoading />;
    }
    return (
      <LinearGradient
        style={{ flex: 1 }}
        colors={getBackgroundColor(deckColor)}
        start={[0, 0]}
        end={[0, 1]}
      >
        <TouchableOpacity
          style={styles.btnAddNewDeck}
          onPress={() => navigation.navigate('DeckNew')}
        >
          <Feather name='plus-square' size={20} color={'#f1f1f1'} />
          <Text style={styles.txtAddNewDeck}>New Deck</Text>
        </TouchableOpacity>
        <FlatList
          data={Object.values(decks)}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
        />
      </LinearGradient>
    );
  }
}

const mapStateToProps = store => {
  return { decks: store };
};

export default connect(mapStateToProps)(DecksList);

/**
 * Styled Components
 */

const styles = StyleSheet.create({
  btnAddNewDeck: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: 10
  },
  txtAddNewDeck: {
    color: 'white',
    marginLeft: 10,
    marginRight: 15
  }
});
