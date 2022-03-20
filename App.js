import React from 'react';
import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Card from './components/Card';

export default function App() {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={style.parent}>
        <View style={style.header}>
          <Text style={style.headerText}>Guess a Number</Text>
        </View>
        <Card />
      </View>
    </TouchableWithoutFeedback>
  );
}

const style = StyleSheet.create({
  parent: {
    alignItems: 'center',
    flex: 1,
  },
  header: {
    backgroundColor: 'red',
    width: '100%',
    height: 50,
    justifyContent: 'center',
  },
  headerText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
  },
});
