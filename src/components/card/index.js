import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import FlipCard from 'react-native-flip-card';
import { LinearGradient } from 'expo';
import { Text, StyleSheet, Alert } from 'react-native';
import { getBackgroundColor, quizColor } from '../../util/helpers';
import ProgressBar from './ProgressBar';
import BackCard from './CardBack';
import FaceCard from './CardFace';
import ResultCard from './CardResult';

class CardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      corrects: 0,
      currentQuestion: 1,
      totalQuestions: props.navigation.state.params.questions.length,
      progress: 0,
      flipped: false
    };
  }

  toggleFlip = () => {
    this.setState(state => ({
      flipped: !state.flipped
    }));
  };

  handleAnswer = answer => {
    const { corrects, currentQuestion, totalQuestions, progress } = this.state;

    const score = answer ? corrects + 1 : corrects;

    this.setState(() => ({
      corrects: score,
      progress: Math.round((currentQuestion / totalQuestions) * 100),
      currentQuestion: progress < 100 ? currentQuestion + 1 : currentQuestion
    }));

    this.toggleFlip();
  };

  handleGiveUpClick = () => {
    const { name } = this.props.navigation.state.params;
    Alert.alert(
      `GIVE UP!`,
      `Would you like to quit ${name}'s Quiz?`,
      [
        {
          text: `No... stay here`,
          style: 'cancel'
        },
        {
          text: `Yes! I'll give up!`,
          onPress: () => this.props.navigation.goBack()
        }
      ],
      { cancelable: true }
    );
  };

  restartQuiz = () => {
    this.setState(() => ({
      corrects: 0,
      currentQuestion: 1,
      progress: 0,
      flipped: false
    }));
  };

  goBack = () => {
    this.props.navigation.goBack();
  };

  render() {
    const { name, questions } = this.props.navigation.state.params;
    const { progress, totalQuestions, corrects } = this.state;
    const currentQuestion =
      progress < 100
        ? this.state.currentQuestion
        : this.state.currentQuestion - 1;
    const { question, answer } = questions[currentQuestion - 1];

    return (
      <LinearGradient
        colors={getBackgroundColor(quizColor)}
        style={styles.container}
      >
        <ContainerTitle>
          <Title>{name}</Title>
        </ContainerTitle>
        <ProgressBar
          progress={progress}
          total={totalQuestions}
          current={currentQuestion}
        />
        <ContainerCard>
          <FlipCard
            flipHorizontal={true}
            flipVertical={false}
            friction={5}
            clickable={false}
            flip={this.state.flipped}
            useNativeDriver={true}
          >
            {/* Front face of the card */}
            {progress < 100 ? (
              <FaceCard flip={this.toggleFlip} card={question} />
            ) : (
              <ResultCard
                flip={this.state.flipped}
                corrects={corrects}
                total={totalQuestions}
                goBack={this.goBack}
                restart={this.restartQuiz}
              />
            )}
            {/* Back face of the card */}
            <BackCard handleAnswer={this.handleAnswer} card={answer} />
          </FlipCard>
        </ContainerCard>
        <Footer>
          {progress < 100 && (
            <BtnSair onPress={this.handleGiveUpClick}>
              <Text>Give Up!</Text>
            </BtnSair>
          )}
        </Footer>
      </LinearGradient>
    );
  }
}

export default CardPage;

/**
 * Stylesheet
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});

/**
 * Styled Components
 */

const ContainerTitle = styled.View`
  flex: 1;
  justify-content: center;
  align-content: center;
`;

const Title = styled.Text`
  font-size: 28;
  font-weight: bold;
  color: white;
  text-align: center;
`;

const ContainerCard = styled.View`
  flex: 4;
  justify-content: flex-start;
  margin: 5px;
  width: 80%;
`;

const Footer = styled.View`
  flex: 1;
  align-self: flex-end;
  justify-content: center;
  margin-right: 50;
`;

const BtnSair = styled.TouchableOpacity`
  justify-content: center;
  align-self: flex-end;
  padding: 5px;
  background-color: rgba(150, 150, 150, 0.5);
  border: 1px solid #999;
  border-radius: 3px;
`;
