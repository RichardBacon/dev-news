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
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faNewspaper,
  faArrowCircleUp,
  faArrowCircleDown,
  faArrowCircleLeft,
  faArrowCircleRight,
  faTimesCircle
);

ReactDOM.render(<App />, document.getElementById('root'));
