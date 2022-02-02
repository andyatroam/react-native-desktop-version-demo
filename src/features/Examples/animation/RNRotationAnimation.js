import React, {useEffect, useState} from 'react';
import {Animated, StyleSheet, View, Easing, Text, Platform} from 'react-native';
import ExampleContainer from '../../../components/ExampleContainer';
const styles = StyleSheet.create({
  rectangle: {
    backgroundColor: '#ffcc00',
    width: 250,
    height: 250,
  },
});

function RotationRect() {
  const [stopped, setStopped] = useState(0);
  const [animValue, setAnimValue] = useState(new Animated.Value(10));

  // can't use useNativeDriver on macOS version
  const rotateRectangle = () => {
    animValue.setValue(10);
    Animated.timing(animValue, {
      toValue: 250,
      duration: 2500,
      easing: Easing.linear,
      useNativeDriver: Platform.OS === 'ios' || Platform.OS === 'android',
    }).start(({finished}) => {
      console.log('is finished: ', finished);
      console.log('stopped', stopped);
      if (finished && stopped === 0) {
        rotateRectangle();
      }
    });
  };

  useEffect(() => {
    rotateRectangle();
    return () => {
      setStopped(1);
    };
  }, []);

  return (
    <ExampleContainer
      title="Rotation animation test"
      description="The macOS version only rotate the text inside the View, but the iOS version will rotate the View with the Text inside it.">
      <Animated.View
        style={[
          styles.rectangle,
          {
            transform: [
              {
                rotate: animValue.interpolate({
                  inputRange: [0, 250],
                  outputRange: ['0deg', '360deg'],
                }),
              },
            ],
          },
        ]}>
        <Text>Rotate text</Text>
      </Animated.View>
    </ExampleContainer>
  );
}

export default RotationRect;
