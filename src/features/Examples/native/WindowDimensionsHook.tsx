import React from 'react';
import {View, StyleSheet, Text, useWindowDimensions} from 'react-native';

const WindowDimensionHook = () => {
  const window = useWindowDimensions();
  return (
    <View style={styles.container}>
      <Text>{`Window Dimensions: ${window.width} x ${window.height} `}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WindowDimensionHook;
