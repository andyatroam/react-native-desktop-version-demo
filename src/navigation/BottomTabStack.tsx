import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {View} from 'react-native';
import {Icon, Text} from 'react-native-elements';
import ExampleStack from './ExampleStack';

const Tab = createBottomTabNavigator();

const TabView = () => {
  return (
    <View>
      <Text>This is the tab inner view</Text>
    </View>
  );
};

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
    <View style={{flex: 1, flexDirection: 'row'}}>
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
          component={TabView}
        />
        <Tab.Screen
          options={{headerShown: false}}
          name="Profile"
          component={TabView}
        />
      </Tab.Navigator>
    </View>
  );
};

export default BottomTabScreen;
