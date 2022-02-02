import React, {Component} from 'react';
import {Animated, Easing} from 'react-native';
import ExampleContainer from '../../../components/ExampleContainer';
import {SimpleButton} from '../../../components/Typography';

export default class MoveXY extends Component {
  state = {
    isAnimating: false,
    animatedValue: new Animated.ValueXY({x: -100, y: 0}),
    flipValue: -100,
  };

  render() {
    return (
      <ExampleContainer
        title="Simple movement animation"
        description="This demo is using the out of the box React Native Animation">
        <Animated.Image
          source={require('../assets/images/bye.gif')}
          resizeMode={'contain'}
          style={{
            width: '100%',
            height: 50,
            transform: this.state.animatedValue.getTranslateTransform(),
          }}
        />

        <SimpleButton
          title="Press me!"
          handle={() => {
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
          }}
        />
      </ExampleContainer>
    );
  }
}
