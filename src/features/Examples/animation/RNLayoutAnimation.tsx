import React from 'react';
import {LayoutAnimation, NativeModules, StyleSheet, View} from 'react-native';
import ExampleContainer from '../../../components/ExampleContainer';
import {SimpleButton} from '../../../components/Typography';

const {UIManager} = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default class App extends React.Component {
  state = {
    w: 100,
    h: 100,
  };

  _onPress = () => {
    LayoutAnimation.easeInEaseOut();
    this.setState({w: this.state.w + 35, h: this.state.h + 35});
  };

  render() {
    return (
      <ExampleContainer title="">
        <View
          style={[styles.box, {width: this.state.w, height: this.state.h}]}
        />
        <SimpleButton
          title="Press me!"
          handle={() => {
            LayoutAnimation.easeInEaseOut();
            this.setState({w: this.state.w + 35, h: this.state.h + 35});
          }}
        />
      </ExampleContainer>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    width: 200,
    height: 200,
    backgroundColor: 'red',
  },
});
