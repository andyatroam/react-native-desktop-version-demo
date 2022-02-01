import React, {useEffect, useState} from 'react';
import {Animated, StyleSheet, View} from 'react-native';

// create a component
function RotationRect() {
  const [animValue, setAnimValue] = useState(new Animated.Value(250));

  const handleSelect = () => {
    animValue._value > 250
      ? Animated.timing(animValue, {
          toValue: 250,
          duration: 2500,
          // useNativeDriver: true, // <-- can't use this on macOS version
        }).start(({finished}) => {
          /* completion callback */
          console.log('1 finished');
        })
      : Animated.timing(animValue, {
          toValue: 450,
          duration: 2500,
          // useNativeDriver: true, // <-- can't use this on macOS version
        }).start(({finished}) => {
          /* completion callback */
          console.log('2 finished');
        });
  };

  useEffect(() => {
    handleSelect();
  }, []);

  const renderRectangle = () => {
    let rotateAnimation = animValue.interpolate({
      inputRange: [250, 450],
      outputRange: ['0deg', '360deg'],
    });

    const customStyle = {
      height: animValue,
      transform: [{rotate: rotateAnimation}],
    };

    return (
      <Animated.View style={[styles.rectangle, customStyle]}>
        <View style={{flex: 1}} />
      </Animated.View>
    );
  };

  return <View style={styles.container}>{renderRectangle()}</View>;
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rectangle: {
    backgroundColor: '#2c3e50',
    width: 250,
  },
});

export default RotationRect;
