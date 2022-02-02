import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Icon} from 'react-native-elements';
import ScreenContent from '../../components/PageContainer';
import TopBar from '../../components/TopBar';
import ExampleList, {ExampleItemData} from './ExampleList';

const styles = StyleSheet.create({
  item: {
    paddingLeft: 10,
    paddingVertical: 15,
    borderRadius: 6,
    marginBottom: 1,
    flexDirection: 'row',
    // backgroundColor: '#fffffe',
    borderColor: '#00214d',
    borderWidth: 3,
    marginVertical: 6,
  },
  itemTitle: {
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
    <Text style={styles.itemTitle}>{title}</Text>
  </View>
);

const ExampleScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({item}: {item: ExampleItemData}) => (
    <TouchableOpacity
      key={item.title.replace(/ /g, '')}
      onPress={() => {
        navigation.navigate(item.title.replace(/ /g, ''));
      }}>
      <Item title={item.title} />
    </TouchableOpacity>
  );
  return (
    <>
      {(Platform.OS === 'ios' || Platform.OS === 'android') && <TopBar />}
      <ScreenContent
        title="Example list"
        content={<FlatList data={ExampleList} renderItem={renderItem} />}
        footer={<Text>2022</Text>}
      />
    </>
  );
};

export default ExampleScreen;
