import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import MainScreen from '../examples/welcome/MainScreen';

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainScreen"
        options={{headerShown: false}}
        component={MainScreen}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
