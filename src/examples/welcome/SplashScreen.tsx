import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {Heading, Paragraph} from '../../components/Typography';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingHorizontal: 20,
    minWidth: 100,
    backgroundColor: '#ffcc00',
    borderColor: '#cccccc',
    borderWidth: 1,
  },
});

const LoadingScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.background}>
      {/* <ActivityIndicator /> */}
      <Heading>React Native macOS demo</Heading>
      <Paragraph>
        This is a demo project for demonstrating the ability of React Native{' '}
      </Paragraph>
      <Button
        title="NEXT"
        disabled={false}
        onPress={() => {
          navigation.navigate('MainScreen');
        }}
      />
    </View>
  );
};

export default LoadingScreen;
