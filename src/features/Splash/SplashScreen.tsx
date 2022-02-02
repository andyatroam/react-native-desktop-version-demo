import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {Heading, Paragraph} from '../../components/Typography';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  button: {
    paddingHorizontal: 20,
    minWidth: 100,
    borderWidth: 1,
  },
});

const SplashScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.background}>
      <Heading>React Native desktop app demo</Heading>
      <Paragraph>
        This is a demo project to demonstrate the features that can be built on
        desktop app by using React Native
      </Paragraph>
      <View style={{height: 60}} />
      <Button
        title="NEXT"
        disabled={false}
        onPress={() => {
          navigation.navigate('Intro');
        }}
      />
    </View>
  );
};

export default SplashScreen;
