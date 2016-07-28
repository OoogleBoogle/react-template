import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Link, hashHistory } from 'react-router'

import Main from './components/main';
import store from './redux/store';


const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main} />
  </Router>
)


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      {routes}
    </Provider>, document.querySelector('.app'));
});
