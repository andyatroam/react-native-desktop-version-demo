import * as React from 'react';
import {Image} from 'react-native';
import {
  ActivityIndicator,
  Badge,
  Banner,
  Button,
  Colors,
  DefaultTheme,
  ProgressBar,
  Provider as PaperProvider,
  RadioButton,
  Switch,
} from 'react-native-paper';
import ExampleContainer, {
  ExampleSection,
} from '../../../components/ExampleContainer';

const theme = {
  ...DefaultTheme,
  // in order to make paper ui work on macos
  // we need to replace the theme font family
  fonts: {
    ...DefaultTheme.fonts,
    regular: {
      fontFamily: 'Helvetica Neue',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Helvetica Neue',
      fontWeight: 'normal',
    },
  },
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};

const RadioButtonGroup = () => {
  const [value, setValue] = React.useState('first');

  return (
    <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
      <RadioButton.Item label="First item" value="first" />
      <RadioButton.Item label="Second item" value="second" />
    </RadioButton.Group>
  );
};

const SwitchExample = () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />;
};

function PaperButtons() {
  return (
    <ExampleSection description="Buttons">
      <Button
        icon={{
          uri: 'https://avatars0.githubusercontent.com/u/17571969?v=3&s=400',
        }}>
        With icon
      </Button>
      <Button onPress={() => console.log('Pressed')}>Without icon</Button>

      {RadioButtonGroup()}
    </ExampleSection>
  );
}

function Others() {
  return (
    <ExampleSection description="Others">
      <ActivityIndicator animating={true} color={Colors.red800} />
      <ProgressBar progress={0.7} color={Colors.green500} />
      <Badge>3</Badge>
      <Banner
        visible
        actions={[
          {
            label: 'Fix it',
            // onPress: () => setVisible(false),
          },
          {
            label: 'Learn more',
            // onPress: () => setVisible(false),
          },
        ]}
        icon={({size}) => (
          <Image
            source={{
              uri: 'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4',
            }}
            style={{
              width: size,
              height: size,
            }}
          />
        )}>
        There was a problem processing a transaction on your credit card.
      </Banner>
      {SwitchExample()}
    </ExampleSection>
  );
}

function PaperUIs() {
  return (
    <ExampleContainer
      title="React Native Paper"
      description="The UI of this library presented on the iOS and macOS platform are very different">
      <PaperProvider theme={theme}>
        {/* <ScrollView> */}
        {PaperButtons()}
        {Others()}
        {/* </ScrollView> */}
      </PaperProvider>
    </ExampleContainer>
  );
}

export default PaperUIs;
