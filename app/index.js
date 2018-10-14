// @flow

import * as React from 'react';
import ReactDOM from 'react-dom';
import '@babel/polyfill';

import App from './app';

const rootEl = document.getElementById('root');
if (rootEl) {
  ReactDOM.render(<App />, rootEl);
} else {
  throw new Error('rootEl not found in page.');
}
