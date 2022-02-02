import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {Paragraph} from '../../components/Typography';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    alignContent: 'center',
  },
});

const IntroScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.background}>
      <Paragraph>
        This demo is for testing purposes only, not all features work perfectly.
      </Paragraph>
      <Paragraph>
        Currently I have only tested the iOS version and macOS version, and will
        test the Android and Windows versions in the future.
      </Paragraph>
      <Paragraph>
        Some of the tests does not run well on multiple platforms, and I
        described in the example page.
      </Paragraph>
      <Paragraph>
        Will continue to update and add more tests in the future.
      </Paragraph>
      <View style={{height: 60}} />
      <Button
        title="Next"
        onPress={() => {
          navigation.navigate('MainScreen');
        }}
      />
    </View>
  );
};

export default IntroScreen;
