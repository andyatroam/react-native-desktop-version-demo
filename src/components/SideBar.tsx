import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import {Avatar} from 'react-native-elements/dist/avatar/Avatar';

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    minWidth: 180,
    fontWeight: 'bold',
    backgroundColor: '#00ebc7',
    borderColor: '#00214d',
    borderWidth: 3,
    borderRadius: 10,
    color: '#00214d',
    marginBottom: 10,
  },
});

function SideBarScreen({callback}: {callback: (name: string) => void}) {
  // const nav = useNavigation();

  return (
    <View style={styles.background}>
      <Avatar />
      <Button
        title="Examples"
        onPress={() => {
          if (callback) {
            callback('Examples');
          }
          // navigation.navigate('Examples');
        }}
      />

      <Button
        title="Settings"
        onPress={() => {
          if (callback) {
            callback('Settings');
          }
          // navigation.navigate('Examples');
        }}
      />

      {/* <TouchableOpacity>
        <Text style={styles.button}>Examples</Text>
      </TouchableOpacity> */}
      <Text style={styles.button}>Settings</Text>
      <Text style={styles.button}>Profiles</Text>
    </View>
  );
}

export default SideBarScreen;
