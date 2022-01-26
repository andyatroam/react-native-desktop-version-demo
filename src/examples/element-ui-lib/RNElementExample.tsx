import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import {Button, ButtonGroup} from 'react-native-elements';

function RNElementExample(): JSX.Element {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedIndexes, setSelectedIndexes] = useState([0, 2, 3]);
  return (
    <ScrollView>
      <ButtonGroup
        buttons={['SIMPLE', 'BUTTON', 'GROUP']}
        selectedIndex={selectedIndex}
        onPress={value => {
          setSelectedIndex(value);
        }}
        containerStyle={{marginBottom: 20}}
      />
      <ButtonGroup
        buttons={['Multiple', 'Select', 'Button', 'Group']}
        selectMultiple
        selectedIndexes={selectedIndexes}
        onPress={value => {
          setSelectedIndexes(value);
        }}
        containerStyle={{marginBottom: 20}}
      />

      <Button
        title={'React Native Elements'}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
      />
      <Button
        title="Basic Button"
        buttonStyle={{
          backgroundColor: 'rgba(78, 116, 289, 1)',
          borderRadius: 3,
        }}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
      />
      <Button
        title="Dark"
        buttonStyle={{backgroundColor: 'rgba(39, 39, 39, 1)'}}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        titleStyle={{color: 'white', marginHorizontal: 20}}
      />

      <Button
        title="Log in"
        loading={false}
        loadingProps={{size: 'small', color: 'white'}}
        buttonStyle={{
          backgroundColor: 'rgba(111, 202, 186, 1)',
          borderRadius: 5,
        }}
        titleStyle={{fontWeight: 'bold', fontSize: 23}}
        containerStyle={{
          marginHorizontal: 50,
          height: 50,
          width: 200,
          marginVertical: 10,
        }}
        onPress={() => console.log('aye')}
      />
      <Button
        title="Secondary"
        buttonStyle={{backgroundColor: 'rgba(127, 220, 103, 1)'}}
        containerStyle={{
          height: 40,
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        titleStyle={{
          color: 'white',
          marginHorizontal: 20,
        }}
      />
      <Button
        title="Warning"
        containerStyle={{
          height: 40,
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        buttonStyle={{backgroundColor: 'rgba(255, 193, 7, 1)'}}
        titleStyle={{
          color: 'white',
          marginHorizontal: 20,
        }}
      />
      <Button
        title="Danger"
        buttonStyle={{backgroundColor: 'rgba(214, 61, 57, 1)'}}
        containerStyle={{
          height: 40,
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        titleStyle={{color: 'white', marginHorizontal: 20}}
      />
      <Button
        title="Request an agent"
        titleStyle={{fontWeight: '500'}}
        buttonStyle={{
          backgroundColor: 'rgba(199, 43, 98, 1)',
          borderColor: 'transparent',
          borderWidth: 0,
        }}
        containerStyle={{
          width: 200,
          height: 45,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
      />
    </ScrollView>
  );
}

export default RNElementExample;
