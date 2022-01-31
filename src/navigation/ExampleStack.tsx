import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import ExampleList from '../features/Examples/ExampleList';
import ExampleScreen from '../features/Examples/welcome/ExampleListScreen';
const Stack = createStackNavigator();

function ExampleStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Examples"
        component={ExampleScreen}
        options={{headerShown: false}}
      />
      {ExampleList.map(({title, name, screen: ExampleItemScreen}) => (
        <Stack.Screen
          key={title}
          name={name}
          component={ExampleItemScreen}
          options={{headerShown: true}}
        />
      ))}
    </Stack.Navigator>
  );
}

export default ExampleStack;
