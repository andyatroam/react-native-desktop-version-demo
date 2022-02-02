import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Platform, StyleSheet, useColorScheme} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import IntroScreen from '../features/Intro/IntroScreen';
import SplashScreen from '../features/Splash/SplashScreen';
import BottomTabScreen from './BottomTabStack';
import WindowColumnStack from './WindowColumnStack';

const NavigateStack = createStackNavigator();

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

function RootNavigator() {
  return (
    <>
      <NavigateStack.Navigator screenOptions={{headerShown: false}}>
        <NavigateStack.Screen name="Splash" component={SplashScreen} />
        <NavigateStack.Screen name="Intro" component={IntroScreen} />
        {Platform.OS === 'ios' || Platform.OS === 'android' ? (
          <NavigateStack.Screen
            name="MainScreen"
            options={{headerShown: false}}
            component={BottomTabScreen}
          />
        ) : (
          <NavigateStack.Screen
            name="MainScreen"
            options={{headerShown: false}}
            component={WindowColumnStack}
          />
        )}
      </NavigateStack.Navigator>
    </>
  );
}

export default function AppRoot() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView style={styles.root}>
      <NavigationContainer
        theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}
