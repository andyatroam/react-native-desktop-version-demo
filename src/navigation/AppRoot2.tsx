import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeStack from './WelcomeStack';

// import AuthStack from './AuthStack/AuthStack';
// import PokedexStack from './PokedexStack/PokedexStack';

const RootStack = createStackNavigator();

export default function AppRoot() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: true}}>
        <RootStack.Screen name="WelcomeStack" component={WelcomeStack} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
