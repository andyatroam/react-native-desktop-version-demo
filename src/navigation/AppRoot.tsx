import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Platform, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import SideBar from '../components/SideBar';
import WelcomeScreen from '../examples/welcome/SplashScreen';
import BottomTabScreen from './BottomTabStack';
import ExampleStack from './ExampleStack';
import IntroStack from './IntroStack';
import WelcomeStack from './WelcomeStack';
import WindowColumnStack from './WindowColumnStack';

const NavigateStack = createStackNavigator();

function RootNavigator() {
  return (
    <>
      <NavigateStack.Navigator screenOptions={{headerShown: false}}>
        <NavigateStack.Screen name="Welcome" component={WelcomeScreen} />
        <NavigateStack.Screen name="Intro" component={IntroStack} />
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
        {/* <NavigateStack.Screen name="Examples" component={ExampleStack} /> */}
      </NavigateStack.Navigator>
    </>
  );
}

export default function AppRoot() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fffffe'}}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}
