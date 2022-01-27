import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {Heading} from '../../components/Typography';
import ExampleList, {ExampleItemData} from '../../ExampleList';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  item: {
    paddingLeft: 10,
    paddingVertical: 15,
    borderRadius: 6,
    marginBottom: 1,
    flexDirection: 'row',
    backgroundColor: '#fffffe',
    borderColor: '#00214d',
    borderWidth: 3,
    marginVertical: 6,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

const Item = ({title}: {title: string}) => (
  <View style={styles.item}>
    <Icon
      name="arrow-right"
      hasTVPreferredFocus
      tvParallaxProperties
      type="evilicon"
      color="#00214d"
    />
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
      <Heading>Examples list</Heading>
      <FlatList data={ExampleList} renderItem={renderItem} />
    </View>
  );
};

export default ExampleScreen;
