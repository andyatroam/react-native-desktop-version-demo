import React from 'react';
import {Text, StyleSheet, useColorScheme, View, Image} from 'react-native';
import OSColourSchemeImage from '../../assets/images/os_colour_scheme.png';
const ColorScheme = () => {
  const colorScheme = useColorScheme();
  return (
    <View style={styles.container}>
      <Text>useColorScheme(): {colorScheme}</Text>
      <Image source={OSColourSchemeImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ColorScheme;
