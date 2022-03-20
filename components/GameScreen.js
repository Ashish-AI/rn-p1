import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNumber = Math.floor(Math.random() * (max - min)) + min;
  if (rndNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  }
};

const GameScreen = props => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.selectedNumber),
  );

  return (
    <View>
      <Text>Opponent Guessed: {currentGuess}</Text>
    </View>
  );
};

const style = StyleSheet.create({});

export default GameScreen;
