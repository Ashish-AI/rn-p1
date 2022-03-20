import React, {useState} from 'react';
import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';

const Card = props => {
  const [value, setValue] = useState('');
  const [selectedNumber, setSelectedNumber] = useState('');
  const [confrimState, setConfrimState] = useState(false);
  const handleChange = inputText => {
    setValue(inputText.replace(/[^0-9]/g, ''));
  };

  const resetInputHandler = () => {
    setValue('');
    setConfrimState(false);
  };
  const confirmInputHandler = () => {
    const confirmedNumber = parseInt(value);
    console.log(confirmedNumber);

    if (
      isNaN(confirmedNumber) ||
      confirmedNumber <= 0 ||
      confirmedNumber > 99
    ) {
      Alert.alert('Invalid Number!', 'Please enter a number b/w 1 and 99', [
        {text: 'Okay', style: 'destructive', onPress: resetInputHandler},
      ]);
      return;
    }

    setConfrimState(true);
    setSelectedNumber(confirmedNumber);
    setValue('');
  };
  let confrimedOutput;
  if (confrimState)
    confrimedOutput = (
      <View style={style.gameContainer}>
        <Text> You selected </Text>
        <View style={style.numberContainer}>
          <Text style={style.number}> {selectedNumber}</Text>
        </View>
        <Button title="Start Game"></Button>
      </View>
    );

  return (
    <View>
      <View style={style.cardContainer}>
        <Text>Enter a number</Text>
        <View style={style.inputContainer}>
          <TextInput
            keyboardType="number-pad"
            style={style.input}
            placeholder="Number here"
            maxLength={2}
            onChangeText={handleChange}
            value={value}
          />
        </View>
        <View style={style.buttonContainer}>
          <Button title="Reset" onPress={resetInputHandler} />
          <Button title="Submit" onPress={confirmInputHandler} />
        </View>
      </View>
      {confrimedOutput}
    </View>
  );
};

const style = StyleSheet.create({
  cardContainer: {
    marginTop: 30,
    padding: 20,
    alignItems: 'center',
    width: 250,
    elevation: 5,
    // backgroundColor: 'red',
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderColor: 'white',
  },
  input: {
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    paddingTop: 20,
    justifyContent: 'space-around',
  },

  gameContainer: {
    marginTop: 50,
    padding: 20,
    elevation: 5,
    height: 150,
    width: 250,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberContainer: {
    borderColor: 'orange',
    borderWidth: 2,
    margin: 5,
  },
  number: {
    fontSize: 20,
    textAlign: 'center',
    margin: 5,
  },
});

export default Card;
