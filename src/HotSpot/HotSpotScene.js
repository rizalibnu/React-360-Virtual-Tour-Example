import React from 'react';
import { StyleSheet, Text, View, VrButton } from 'react-360';

const styles = StyleSheet.create({
  image: {
    top: 55,
    position: 'absolute',
    borderRadius: 32,
    borderColor: 'rgba(255, 255, 255, 1)',
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    padding: 20,
    width: 200,
    height: 50,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default class HotSpotScene extends React.Component {
  state = {
    isButtonHovered: false,
  };

  handleButtonEnter = () => {
    this.setState({ isButtonHovered: true });
  };

  handleButtonExit = () => {
    this.setState({ isButtonHovered: false });
  };

  handleButtonClick = () => {
    if (this.props.onClick) {
      this.props.onClick();
    }
  };

  render() {
    const highlightedBoxStyle = {
      backgroundColor: this.state.isButtonHovered ? '#339f0f' : '#64ec36',
    };

    return (
      <View
        style={{
          top: this.props.top,
          left: this.props.left,
          position: 'absolute',
        }}
      >
        <VrButton
          style={[styles.box, highlightedBoxStyle]}
          onEnter={this.handleButtonEnter}
          onExit={this.handleButtonExit}
          onClick={this.handleButtonClick}
        >
          <Text style={styles.text}>{`${this.props.text}`}</Text>
        </VrButton>
      </View>
    );
  }
}
