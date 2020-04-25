import React from 'react';
import { StyleSheet, Text, View } from 'react-360';

const styles = StyleSheet.create({
  box: {
    padding: 20,
    backgroundColor: 'blue',
    opacity: 0.8,
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
  },
});

export default class HotSpotTitle extends React.Component {
  get locationStyle() {
    return {
      left: this.props.left,
      top: this.props.top,
      position: 'absolute',
    };
  }

  render() {
    return (
      <View style={[styles.box, this.locationStyle]}>
        <Text style={styles.text}>Kamu berada di</Text>
        <Text style={styles.text}>{`${this.props.text}`}</Text>
      </View>
    );
  }
}
