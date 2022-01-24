import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import IntroScreen from '../examples/welcome/IntroScreen';

const Stack = createStackNavigator();

function IntroStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Introduce"
        component={IntroScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default IntroStack;
