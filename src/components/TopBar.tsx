import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Icon, Text} from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 48,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    paddingLeft: 10,
    fontWeight: 'bold',
  },
  divider: {
    flex: 1,
  },
  icons: {
    paddingRight: 10,
  },
  itemTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

function TopBar() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Good morning!!</Text>
      <Text style={styles.divider} />
      <Text style={styles.icons}>
        <Icon
          name="gear"
          hasTVPreferredFocus
          tvParallaxProperties
          type="evilicon"
          color="#517fa4"
        />
      </Text>
    </View>
  );
}

export default TopBar;
