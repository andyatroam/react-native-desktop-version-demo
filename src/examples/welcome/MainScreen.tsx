import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Text, View} from 'react-native';
import ExampleScreen from './ExampleScreen';

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

const Tab = createBottomTabNavigator();
const IntroScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Main"
      screenOptions={headerOptions}
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Examples" component={ExampleScreen} />
      <Tab.Screen name="Setting" component={View} />
      <Tab.Screen name="Profile" component={View} />
    </Tab.Navigator>
  );
};

export default IntroScreen;
