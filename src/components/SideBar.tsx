import {StackActions, useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Icon, Text} from 'react-native-elements';
import {Avatar} from 'react-native-elements/dist/avatar/Avatar';

const styles = StyleSheet.create({
  background: {
    paddingVertical: 16,
    backgroundColor: '#001534',
    paddingHorizontal: 20,
    flexDirection: 'column',
    alignItems: 'center',
  },
  greeting: {
    color: '#fff',
    marginBottom: 10,
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    minWidth: 180,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: '#00ebc7',
    borderColor: '#00214d',
    borderWidth: 3,
    borderRadius: 6,
    color: '#b7c9e4',
    marginBottom: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#b7c9e4',
    marginLeft: 12,
  },
});

function getButton({title, icon, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          ...styles.button,
        }}>
        <Icon
          name={icon}
          hasTVPreferredFocus
          tvParallaxProperties
          type="evilicon"
          color="#517fa4"
        />
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

function SideBarScreen() {
  const nav = useNavigation();

  return (
    <View style={styles.background}>
      <Avatar
        size="large"
        rounded
        containerStyle={{marginBottom: 30, backgroundColor: '#fde24f'}}
        title="D"
      />
      <Text style={styles.greeting}>Good morning!!</Text>
      {getButton({
        title: 'Examples',
        icon: 'navicon',
        onPress: () => {
          nav.dispatch(
            StackActions.replace('MainScreen', {screen: 'Examples'}),
          );
        },
      })}
      <View style={{flex: 1}} />
      {getButton({
        title: 'Settings',
        icon: 'gear',
        onPress: () => {
          nav.dispatch(StackActions.replace('MainScreen', {screen: 'Setting'}));
        },
      })}
      {getButton({
        title: 'Profile',
        icon: 'user',
        onPress: () => {
          nav.dispatch(StackActions.replace('MainScreen', {screen: 'Profile'}));
        },
      })}
    </View>
  );
}

export default SideBarScreen;
