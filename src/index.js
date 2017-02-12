import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import {Main} from './app/Main';
import {About} from './app/components/About/About';

import './index.scss';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main} />
		<Route path="/about" component={About} />
  </Router>,
  document.getElementById('root')
);
