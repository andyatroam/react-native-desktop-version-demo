import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';
import ExampleScreen from '../examples/welcome/ExampleScreen';

const Stack = createStackNavigator();

function ExampleStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Examples"
        component={ExampleScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Test1"
        component={() => (
          <View>
            <Text>Animation example 1</Text>
          </View>
        )}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Test2"
        component={() => (
          <View>
            <Text>Animation example 2</Text>
          </View>
        )}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
}

export default ExampleStack;
