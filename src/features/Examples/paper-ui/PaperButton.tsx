import * as React from 'react';
import {View} from 'react-native';
import {
  Button,
  Colors,
  DefaultTheme,
  FAB,
  ProgressBar,
  Provider as PaperProvider,
  RadioButton,
} from 'react-native-paper';

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

function PaperButtons() {
  return (
    <PaperProvider theme={theme}>
      <View>
        <Button onPress={() => console.log('Pressed')}>Press me</Button>
        {/* <FAB small icon="play" onPress={() => {}} /> */}
        <ProgressBar progress={0.7} color={Colors.green500} />
      </View>
      <View>
        <RadioButton
          value="first"
          // checked={checked === 'first'}
          onPress={() => {
            // this.setState({checked: 'firstOption'});
          }}
        />
        <RadioButton
          value="second"
          // checked={checked === 'second'}
          onPress={() => {
            // this.setState({checked: 'secondOption'});
          }}
        />
      </View>
    </PaperProvider>
  );
}

export default PaperButtons;
