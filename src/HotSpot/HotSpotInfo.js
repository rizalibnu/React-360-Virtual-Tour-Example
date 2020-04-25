import React from 'react';
import { StyleSheet, Text, View, Image, asset, Animated } from 'react-360';

const styles = StyleSheet.create({
  image: {
    width: 32,
    height: 32,
  },
  box: {
    padding: 10,
    width: 300,
    backgroundColor: 'blue',
  },
  text: {
    fontSize: 20,
  },
});

const ANIMATION_DURATION = 500;

export default class HotSpotInfo extends React.Component {
  state = {
    infoCardOpacity: new Animated.Value(0),
  };

  handleInfoEnter = () => {
    Animated.timing(this.state.infoCardOpacity, {
      toValue: 1,
      duration: ANIMATION_DURATION,
    }).start();
  };

  handleInfoExit = () => {
    Animated.timing(this.state.infoCardOpacity, {
      toValue: 0,
      duration: ANIMATION_DURATION,
    }).start();
  };

  renderInfoIcon = () => {
    return (
      <Image
        source={asset('info.png')}
        style={styles.image}
        onEnter={this.handleInfoEnter}
      />
    );
  };

  renderInfoCard = () => {
    return (
      <Animated.View
        style={[styles.box, { opacity: this.state.infoCardOpacity }]}
      >
        <Text style={styles.text}>{`${this.props.text}`}</Text>
      </Animated.View>
    );
  };

  get locationStyle() {
    return {
      left: this.props.left,
      top: this.props.top,
      position: 'absolute',
    };
  }

  render() {
    return (
      <View style={this.locationStyle} onExit={this.handleInfoExit}>
        {this.renderInfoCard()}
        {this.renderInfoIcon()}
      </View>
    );
  }
}
