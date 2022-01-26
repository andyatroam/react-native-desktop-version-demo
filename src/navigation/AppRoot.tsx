import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Platform, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import SideBar from '../components/SideBar';
import BottomTabScreen from './BottomTabStack';
import ExampleStack from './ExampleStack';
import IntroStack from './IntroStack';
import WelcomeStack from './WelcomeStack';

const NavigateStack = createStackNavigator();

function RootNavigator() {
  return (
    <>
      <NavigateStack.Navigator screenOptions={{headerShown: false}}>
        <NavigateStack.Screen name="Welcome" component={WelcomeStack} />
        <NavigateStack.Screen name="Intro" component={IntroStack} />
        <NavigateStack.Screen
          name="MainScreen"
          options={{headerShown: false}}
          component={BottomTabScreen}
        />
        <NavigateStack.Screen name="Examples" component={ExampleStack} />
      </NavigateStack.Navigator>
    </>
  );
}

export default function AppRoot() {
  // const nav = useNavigation();

  // return (
  //   <NavigationContainer>
  //     <MyDrawer />
  //   </NavigationContainer>
  // );
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        {Platform.OS === 'macos' && (
          <SideBar
            callback={navName => {
              console.log('navName', navName);
            }}
          />
        )}
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
}
