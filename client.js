// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { ReactInstance, Surface } from 'react-360-web';
// import SimpleRaycaster from 'simple-raycaster';
import WebVRPolyfill from 'webvr-polyfill';

// eslint-disable-next-line no-unused-vars
const polyfill = new WebVRPolyfill();

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  const cylinderSurface = new Surface(
    4680 /* width */,
    2400 /* height */,
    Surface.SurfaceShape.Cylinder /* shape */
  );

  r360.renderToSurface(
    r360.createRoot('App', {
      /* initial props */
    }),
    cylinderSurface
  );

  // use SimpleRaycaster
  // r360.controls.clearRaycasters();
  // r360.controls.addRaycaster(SimpleRaycaster);
}

window.React360 = { init };
