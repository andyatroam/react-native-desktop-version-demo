import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View} from 'react-native';
import ExampleList from '../features/Examples/ExampleList';
import RNElementExample from '../features/Examples/element-ui/RNElementExample';
import ExampleScreen from '../features/Examples/welcome/ExampleListScreen';
import {Text} from 'react-native-elements';
const Stack = createStackNavigator();

function ExampleStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Examples"
        component={ExampleScreen}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="RNElementExample"
        component={RNElementExample}
        options={{headerShown: true}}
      /> */}
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
