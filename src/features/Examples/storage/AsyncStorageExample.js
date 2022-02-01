import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import ExampleContainer from '../../../components/ExampleContainer';

function AsyncStorageExample() {
  const [counter, setCounter] = useState(0);

  const storeObject = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('test_storage_Key', jsonValue);

      const savedValue = await AsyncStorage.getItem('test_storage_Key');
      console.log('savedValue', savedValue);
    } catch (e) {
      // saving error
    }
  };

  const getObject = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('test_storage_Key');
      console.log('jsonValue', jsonValue);
      return jsonValue ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };

  return (
    <ExampleContainer title="AsyncStorage test">
      <TouchableRipple
        onPress={async () => {
          const obj = await getObject();
          storeObject({counter: obj.counter + 1});
        }}>
        <Text>Save a number with AsyncStorage</Text>
      </TouchableRipple>
      <TouchableRipple
        onPress={async () => {
          const obj = await getObject();
          setCounter(obj.counter);
        }}>
        <Text>Read the saved number with AsyncStorage</Text>
      </TouchableRipple>
      <Text>{`Result: ${counter}`}</Text>
    </ExampleContainer>
  );
}

export default AsyncStorageExample;
