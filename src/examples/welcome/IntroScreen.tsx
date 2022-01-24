import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const IntroScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.background}>
      <Text>
        This is a demo to show some functionality of React Native Windows &
        macOS
      </Text>
      <Button
        title="Next"
        onPress={() => {
          navigation.navigate('Examples');
        }}
      />
    </View>
  );
};

export default IntroScreen;
