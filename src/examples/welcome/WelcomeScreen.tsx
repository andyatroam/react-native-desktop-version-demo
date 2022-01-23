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
  container: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 24,
  },
});

const LoadingScreen = () => {
  return (
    <View style={styles.background}>
      <ActivityIndicator />
      <Text>Loading now...</Text>
      <Button
        title="Skip"
        onPress={() => {
          // navigation.navigate('NewFeaturesScreen');
        }}
      />
    </View>
  );
};

export default LoadingScreen;
