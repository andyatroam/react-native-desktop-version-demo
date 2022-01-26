import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';
import SideBar from '../components/SideBar';
import ExampleStack from './ExampleStack';

const Tab = createBottomTabNavigator();
const NavigateStack = createStackNavigator();

const TabView = () => {
  return (
    <View>
      <Text>This is the tab inner view</Text>
    </View>
  );
};

const WindowColumnStack = () => {
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <SideBar
        callback={navName => {
          console.log('navName', navName);
        }}
      />
      <NavigateStack.Navigator initialRouteName="Examples">
        <NavigateStack.Screen
          options={{headerShown: false}}
          name="Setting"
          component={TabView}
        />
        <NavigateStack.Screen
          options={{headerShown: false}}
          name="Examples"
          component={ExampleStack}
        />

        <NavigateStack.Screen
          options={{headerShown: false}}
          name="Profile"
          component={TabView}
        />
      </NavigateStack.Navigator>
    </View>
  );
};

export default WindowColumnStack;
