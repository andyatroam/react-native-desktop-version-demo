import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {Button, Text} from 'react-native';
import ExampleContainer from '../../../components/ExampleContainer';

function AsyncStorageExample() {
  const [counter, setCounter] = useState(0);

  const storeObject = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('test_storage_Key', jsonValue);
    } catch (e) {
      console.log('Error: ', e);
    }
  };

  const getObject = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('test_storage_Key');
      return jsonValue ? JSON.parse(jsonValue) : {counter: 0};
    } catch (e) {
      console.log('Error: ', e);
    }
  };

  const updateCounter = async () => {
    const obj = await getObject();
    if (obj && obj.counter >= 0) {
      storeObject({counter: obj.counter + 1});
    } else {
      storeObject({counter: 0});
    }
    const viewData = await getObject();
    setCounter(viewData.counter);
  };
  useEffect(() => {
    updateCounter();
  }, []);

  return (
    <ExampleContainer title="Async Storage test">
      <Button
        title="Increase the view count with AsyncStorage"
        onPress={updateCounter}
      />
      <Text style={{textAlign: 'center'}}>{`View count: ${counter}`}</Text>
    </ExampleContainer>
  );
}

export default AsyncStorageExample;
