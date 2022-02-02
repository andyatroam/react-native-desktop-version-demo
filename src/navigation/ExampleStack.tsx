import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import ExampleList from '../features/Examples/ExampleList';
import ExampleScreen from '../features/Examples/ExampleListScreen';
const Stack = createStackNavigator();

function ExampleStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Examples"
        component={ExampleScreen}
        options={{headerShown: false}}
      />
      {ExampleList.map(({title, screen: ExampleItemScreen}) => (
        <Stack.Screen
          key={title}
          name={title.replace(/ /g, '')}
          component={ExampleItemScreen}
          options={{headerShown: true, title}}
        />
      ))}
    </Stack.Navigator>
  );
}

export default ExampleStack;
