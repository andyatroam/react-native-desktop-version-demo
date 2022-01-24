import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ActivityIndicator, Button, StyleSheet, Text, View} from 'react-native';

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
      <ActivityIndicator />
      <Text>Loading now...</Text>
      <Button
        title="Skip"
        disabled={false}
        onPress={() => {
          navigation.navigate('Intro');
        }}
      />
    </View>
  );
};

export default LoadingScreen;
