import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faNewspaper,
  faArrowCircleUp,
  faArrowCircleDown,
  faArrowCircleLeft,
  faArrowCircleRight,
  faTimesCircle,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';

import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';

library.add(
  faNewspaper,
  faArrowCircleUp,
  faArrowCircleDown,
  faArrowCircleLeft,
  faArrowCircleRight,
  faTimesCircle,
  faHeart,
  farHeart
);

ReactDOM.render(<App />, document.getElementById('root'));
