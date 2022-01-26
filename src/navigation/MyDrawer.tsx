import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {Text, View} from 'react-native';

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

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerLabel: 'My Drawer',
        // drawerType: 'permanent',
      }}>
      <Drawer.Screen name="Article" component={Article} />
      <Drawer.Screen name="Feed" component={Feed} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
