import React, {useEffect} from 'react';
import {View, Text, Platform, Button} from 'react-native';
import Tone from 'react-native-tone-android';

export default function ToneExample() {
  useEffect(() => {}, []);

  const playTone = () => {
    if (Platform.OS === 'ios') {
    } else if (Platform.OS === 'android') {
      console.log(' play sound ');
      const frequency = 2000; //Hz
      const duration = 300; // ms
      Tone.play(frequency, duration);
    }
  };
  return (
    <View>
      <Text>Tone example 22</Text>
      <Button title="Play" onPress={playTone} color="#841584">
        {/* <Text>Play Tone</Text> */}
      </Button>
    </View>
  );
}
