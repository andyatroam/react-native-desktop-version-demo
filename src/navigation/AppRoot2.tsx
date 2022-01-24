import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeStack from './WelcomeStack';
import IntroStack from './IntroStack';
import MainStack from './MainStack';
import ExampleStack from './ExampleStack';

const RootStack = createStackNavigator();

export default function AppRoot() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen name="Welcome" component={WelcomeStack} />
        <RootStack.Screen name="Intro" component={IntroStack} />
        <RootStack.Screen name="Examples" component={ExampleStack} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
