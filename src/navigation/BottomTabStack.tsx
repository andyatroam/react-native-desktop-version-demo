import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';
import ExampleScreen from '../examples/welcome/ExampleListScreen';
import ExampleStack from './ExampleStack';

const Tab = createBottomTabNavigator();

const headerOptions = {
  headerStyle: {
    height: 70,
    borderBottomColor: '#222224',
    borderBottomWidth: 6,
  },
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  headerLeft: () => {
    return <View />;
  },
  tabBarIcon: () => {
    return <View />;
  },
};

const TabView = () => {
  return (
    <View>
      <Text>This is the tab inner view</Text>
    </View>
  );
};

const BottomTabScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Main"
      options={{headerShown: false}}
      screenOptions={headerOptions}
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        options={{headerShown: false}}
        name="Examples"
        component={ExampleStack}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="Setting"
        component={TabView}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="Profile"
        component={TabView}
      />
    </Tab.Navigator>
  );
};

export default BottomTabScreen;
