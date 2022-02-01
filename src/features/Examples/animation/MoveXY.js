import React, {Component} from 'react';
import {View, StyleSheet, Animated, Easing} from 'react-native';
import {Button} from 'react-native-elements';
import ExampleContainer from '../../../components/ExampleContainer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 5,
  },
});

export default class MoveXY extends Component {
  state = {
    isAnimating: false,
    animatedValue: new Animated.ValueXY({x: -100, y: 0}),
    flipValue: -100,
  };

  onPress = () => {
    this.setState(
      {isAnimating: true, flipValue: this.state.flipValue * -1},
      () => {
        Animated.timing(this.state.animatedValue, {
          toValue: {x: this.state.flipValue, y: 0},
          duration: 300,
          easing: Easing.out(Easing.ease),
        }).start(() => this.setState({isAnimating: false}));
      },
    );
  };

  render() {
    return (
      <ExampleContainer
        title="Simple movement animation"
        description="This demo is using the out of the box React Native Animation">
        <Button
          title={'Move'}
          onPress={() => this.onPress()}
          loading={this.state.isAnimating}
          disabled={this.state.isAnimating}
        />
        <Animated.Image
          source={require('../assets/images/bye.gif')}
          resizeMode={'contain'}
          style={{
            // flex: 1,
            width: '100%',
            height: 50,
            transform: this.state.animatedValue.getTranslateTransform(),
          }}
        />
      </ExampleContainer>
    );
  }
}
