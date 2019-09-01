import { StackNavigator } from 'react-navigation';
//Components
import DecksList from '../components/deck';
import NewDeck from '../components/deck/NewDeck';
import DeckPage from '../components/deck/DeckPage';
import CardPage from '../components/card';
import NewCard from '../components/card/NewCard';

function optionsNavHeader(title) {
  return {
    title,
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#333'
    }
  };
}

const Stack = StackNavigator({
  Home: {
    screen: DecksList,
    navigationOptions: {
      header: null
    }
  },
  DeckPage: {
    screen: DeckPage,
    navigationOptions: optionsNavHeader('Deck Details')
  },
  DeckNew: {
    screen: NewDeck,
    navigationOptions: optionsNavHeader('New Deck')
  },
  Cards: {
    screen: CardPage,
    navigationOptions: optionsNavHeader('Quiz')
  },
  CardNew: {
    screen: NewCard,
    navigationOptions: optionsNavHeader('New Card')
  }
});

export default Stack;
