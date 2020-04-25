import React from 'react';

import SceneManager from './SceneManager.js';
import config from './tour.json';

export default class App extends React.Component {
  render() {
    return (
      <SceneManager
        scenes={config.scenes}
        firstSceneId={config.default.firstSceneId}
      />
    );
  }
}
