import React from 'react';
import { View, Environment, asset } from 'react-360';
import { HotSpotScene, HotSpotInfo, HotSpotTitle } from './HotSpot';

export default class SceneManager extends React.Component {
  state = {
    currentSceneId: this.props.firstSceneId,
  };

  componentDidMount() {
    this.updateScene({});
  }

  componentDidUpdate(prevProps, prevState) {
    this.updateScene(prevState);
  }

  updateScene = (prevState) => {
    if (prevState.currentSceneId === this.state.currentSceneId) return;

    const currentScene = this.getCurrentScene();
    Environment.setBackgroundImage(asset(currentScene.panorama));
  };

  getCurrentScene = () => {
    return this.getSceneById(this.state.currentSceneId);
  };

  getSceneById = (sceneId) => {
    return this.props.scenes.find((scene) => scene.sceneId === sceneId);
  };

  handleHotSpotSceneClick = (sceneToGo) => {
    this.setState({ currentSceneId: sceneToGo.sceneId });
  };

  renderHotSpots = (hotSpots = []) => {
    return hotSpots.map((hotSpot, i) => {
      switch (hotSpot.type) {
        case 'scene': {
          const sceneToGo = this.getSceneById(hotSpot.sceneId);
          return (
            <HotSpotScene
              key={i.toString()}
              onClick={() => this.handleHotSpotSceneClick(sceneToGo)}
              text={hotSpot.text}
              left={hotSpot.left}
              top={hotSpot.top}
            />
          );
        }
        case 'info': {
          return (
            <HotSpotInfo
              key={i.toString()}
              text={hotSpot.text}
              left={hotSpot.left}
              top={hotSpot.top}
            />
          );
        }
        case 'title': {
          return (
            <HotSpotTitle
              key={i.toString()}
              text={hotSpot.text}
              left={hotSpot.left}
              top={hotSpot.top}
            />
          );
        }
        default:
          return null;
      }
    });
  };

  render() {
    const currentScene = this.getCurrentScene();

    return (
      <View style={{ flex: 1 }}>
        {this.renderHotSpots(currentScene.hotSpots)}
      </View>
    );
  }
}
