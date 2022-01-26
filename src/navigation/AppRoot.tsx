import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import BottomTabScreen from './BottomTabStack';
import BottomTabStack from './BottomTabStack1';
import ExampleStack from './ExampleStack';
import IntroStack from './IntroStack';
import MyDrawer from './MyDrawer';
import WelcomeStack from './WelcomeStack';

const NavigateStack = createStackNavigator();

function RootNavigator() {
  return (
    <>
      <NavigateStack.Navigator screenOptions={{headerShown: false}}>
        <NavigateStack.Screen name="Welcome" component={WelcomeStack} />
        <NavigateStack.Screen name="Intro" component={IntroStack} />
        <NavigateStack.Screen
          name="MainScreen"
          options={{headerShown: false}}
          component={BottomTabScreen}
        />
        <NavigateStack.Screen name="Examples" component={ExampleStack} />
      </NavigateStack.Navigator>
    </>
  );
}

export default function AppRoot() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <MyDrawer />
        {/* <RootNavigator /> */}
      </NavigationContainer>
    </SafeAreaView>
  );
}
