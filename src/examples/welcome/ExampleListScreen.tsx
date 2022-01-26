import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ExampleList, {ExampleItemData} from '../../ExampleList';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  item: {
    paddingLeft: 10,
    paddingVertical: 10,
    marginBottom: 1,
    flexDirection: 'row',
    backgroundColor: '#ffcc00',
    marginVertical: 6,
  },
  title: {
    fontSize: 15,
  },
});

const Item = ({title}: {title: string}) => (
  <View style={styles.item}>
    {/* <Icon name="sc-telegram" /> */}

    <Text> 👉🏻 </Text>
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
      <Text style={styles.heading}>Examples list</Text>
      <FlatList data={ExampleList} renderItem={renderItem} />
    </View>
  );
};

export default ExampleScreen;
