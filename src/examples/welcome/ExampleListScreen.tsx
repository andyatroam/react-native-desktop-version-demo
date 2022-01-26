import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';
import ExampleList, {ExampleItemData} from '../../ExampleList';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  item: {
    paddingLeft: 10,
    paddingVertical: 10,
    marginBottom: 1,
    backgroundColor: '#ffcc00',
  },
  title: {
    fontSize: 20,
  },
});

const Item = ({title}: {title: string}) => (
  <View style={styles.item}>
    {/* <Icon name="sc-telegram" /> */}

    <Text style={styles.title}>{title}</Text>
  </View>
);

const ExampleScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({item}: {item: ExampleItemData}) => (
    <TouchableOpacity
      key={item.name}
      onPress={() => {
        console.log(item.title);
        navigation.navigate(item.name);
      }}>
      <Item title={item.title} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.background}>
      <Text>Examples list</Text>
      <FlatList data={ExampleList} renderItem={renderItem} />
    </View>
  );
};

export default ExampleScreen;
