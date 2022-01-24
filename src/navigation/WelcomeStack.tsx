import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from '../examples/welcome/WelcomeScreen';

const Stack = createStackNavigator();

function WelcomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={WelcomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default WelcomeStack;
