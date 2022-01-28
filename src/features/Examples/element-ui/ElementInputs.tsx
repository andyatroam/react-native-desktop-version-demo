import React from 'react';
import {Input} from 'react-native-elements';

function ElementInput() {
  return (
    <>
      <Input autoCompleteType="" placeholder="BASIC INPUT" />

      <Input
        autoCompleteType=""
        placeholder="INPUT WITH ICON"
        leftIcon={{type: 'font-awesome', name: 'chevron-left'}}
      />

      <Input autoCompleteType="" placeholder="INPUT WITH CUSTOM ICON" />

      <Input
        autoCompleteType=""
        placeholder="Comment"
        leftIcon={{type: 'font-awesome', name: 'comment'}}
        onChangeText={value => {
          console.log('value', value);
        }}
      />

      <Input
        autoCompleteType=""
        placeholder="INPUT WITH ERROR MESSAGE"
        errorStyle={{color: 'red'}}
        errorMessage="ENTER A VALID ERROR HERE"
      />

      <Input
        autoCompleteType=""
        placeholder="Password"
        secureTextEntry={true}
      />
    </>
  );
}

export default ElementInput;
