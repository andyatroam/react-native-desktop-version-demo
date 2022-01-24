import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  item: {
    paddingLeft: 10,
  },
  title: {
    fontSize: 20,
  },
});
interface ExampleItem {
  title: string;
  path: string;
}

const examples: ExampleItem[] = [
  {title: 'test1', path: 'Test1'},
  {title: 'test2', path: 'Test2'},
  {title: 'test3', path: 'Test3'},
  {title: 'test4', path: 'Test4'},
];

const Item = ({title}: {title: string}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const ExampleScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({item}: {item: ExampleItem}) => (
    <TouchableOpacity
      onPress={() => {
        console.log(item.title);
        navigation.navigate(item.path);
      }}>
      <Item title={item.title} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.background}>
      <Text>Examples list</Text>
      <FlatList data={examples} renderItem={renderItem} />
    </View>
  );
};

export default ExampleScreen;
