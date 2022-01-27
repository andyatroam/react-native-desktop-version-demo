import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View} from 'react-native';
import SideBar from '../components/SideBar';
import AboutScreen from '../features/About/AboutScreen';
import SettingsScreen from '../features/Setting/SettingsScreen';
import ExampleStack from './ExampleStack';

const NavigateStack = createStackNavigator();

const WindowColumnStack = () => {
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <SideBar />
      <NavigateStack.Navigator initialRouteName="Examples">
        <NavigateStack.Screen
          options={{headerShown: false}}
          name="Examples"
          component={ExampleStack}
        />
        <NavigateStack.Screen
          options={{headerShown: false}}
          name="Setting"
          component={SettingsScreen}
        />
        <NavigateStack.Screen
          options={{headerShown: false}}
          name="Profile"
          component={AboutScreen}
        />
      </NavigateStack.Navigator>
    </View>
  );
};

export default WindowColumnStack;
