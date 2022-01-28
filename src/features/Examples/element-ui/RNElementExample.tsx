import React from 'react';
import {ScrollView} from 'react-native';
import ExampleContainer from '../../../components/ExampleContainer';
import {Subheading} from '../../../components/Typography';
import ElementButtons from './ElementButtons';
import ElementCards from './ElementCards';
import ElementInput from './ElementInputs';

function RNElementExample(): JSX.Element {
  return (
    <ExampleContainer title="React Native Element" description="test">
      <ScrollView>
        <Subheading>Buttons</Subheading>
        <ElementButtons />
        <Subheading>Cards</Subheading>
        <ElementCards />
        <Subheading>Inputs</Subheading>
        <ElementInput />
      </ScrollView>
    </ExampleContainer>
  );
}

export default RNElementExample;
