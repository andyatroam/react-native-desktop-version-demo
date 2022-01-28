import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {View} from 'react-native';
import {Icon, Text} from 'react-native-elements';
import AboutScreen from '../features/About/AboutScreen';
import SettingsScreen from '../features/Setting/SettingsScreen';
import ExampleStack from './ExampleStack';

const Tab = createBottomTabNavigator();

const getTabIcon = (routeName: string, focused: boolean = false) => {
  let iconName = 'gear';
  if (routeName === 'Profile') {
    iconName = focused ? 'user' : 'user';
  } else if (routeName === 'Examples') {
    iconName = focused ? 'star' : 'star';
  } else if (routeName === 'Setting') {
    iconName = focused ? 'gear' : 'gear';
  }
  return (
    <Icon
      name={iconName}
      hasTVPreferredFocus
      tvParallaxProperties
      type="evilicon"
      color="#517fa4"
    />
  );
};

const BottomTabScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Main"
      options={{headerShown: false}}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => getTabIcon(route.name, focused),
      })}
      tabBarOptions={{
        activeTintColor: '#00ebc7',
        inactiveTintColor: '#00214d',
      }}>
      <Tab.Screen
        options={{headerShown: false}}
        name="Examples"
        component={ExampleStack}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="Setting"
        component={SettingsScreen}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="Profile"
        component={AboutScreen}
      />
    </Tab.Navigator>
    // </View>
  );
};

export default BottomTabScreen;
