import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import ExampleStack from './ExampleStack';
import IntroStack from './IntroStack';
import WelcomeStack from './WelcomeStack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

function Feed() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Feed Screen</Text>
    </View>
  );
}

function Article() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Article Screen</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();
const NavigateStack = createStackNavigator();

function RootNavigator() {
  return (
    <>
      <NavigateStack.Navigator screenOptions={{headerShown: false}}>
        <NavigateStack.Screen name="Welcome" component={WelcomeStack} />
        <NavigateStack.Screen name="Intro" component={IntroStack} />
        <NavigateStack.Screen name="Examples" component={ExampleStack} />
      </NavigateStack.Navigator>
    </>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerLabel: 'My Drawer',
        // drawerType: 'permanent',
      }}>
      <Drawer.Screen name="Article" component={RootNavigator} />
      <Drawer.Screen name="Feed" component={Feed} />
    </Drawer.Navigator>
  );
}

export default function AppRoot() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    </SafeAreaView>
  );
}
