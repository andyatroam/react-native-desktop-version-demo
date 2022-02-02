import React from 'react';
import {ScrollView} from 'react-native';
import ExampleContainer from '../../../components/ExampleContainer';
import {Subheading} from '../../../components/Typography';
import ElementButtons from './ElementButtons';
import ElementCards from './ElementCards';
import ElementInput from './ElementInputs';
import {ThemeProvider} from 'react-native-elements';

function RNElementExample(): JSX.Element {
  return (
    <ThemeProvider>
      <ExampleContainer title="React Native Element" description="">
        <ScrollView>
          <Subheading>Buttons</Subheading>
          <ElementButtons />
          <Subheading>Cards</Subheading>
          <ElementCards />
          <Subheading>Inputs</Subheading>
          <ElementInput />
        </ScrollView>
      </ExampleContainer>
    </ThemeProvider>
  );
}

export default RNElementExample;
