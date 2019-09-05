import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
//Components
import DecksList from '../components/deck/index';
import NewDeck from '../components/deck/NewDeck';
import DeckPage from '../components/deck/DeckPage';
import CardPage from '../components/card/index';
import NewCard from '../components/card/NewCard';

function optionsNavHeader(title) {
  return {
    title,
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#4356a3'
    }
  };
}

const StackNav = createStackNavigator({
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
  NewDeck: {
    screen: NewDeck,
    navigationOptions: optionsNavHeader('New Deck')
  },
  Cards: {
    screen: CardPage,
    navigationOptions: optionsNavHeader('Quiz')
  },
  NewCard: {
    screen: NewCard,
    navigationOptions: optionsNavHeader('New Card')
  }
});
const AppContainer = createAppContainer(StackNav);
export default AppContainer;
