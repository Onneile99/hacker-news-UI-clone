import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  IndexRoute
} from 'react-router-dom';

// REDUX
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import createBrowserHistory from 'history/createBrowserHistory';
import reducer from './reducer/index';

// STYLING
import './css/bulma.css';
import './css/font-awesome.css';

// COMPONENTS
import AppContainer from './components/containers/AppContainer';
import Home from './components/presentational/Home';

const store = createStore(reducer, applyMiddleware(thunk, logger));
const history = createBrowserHistory();

const router = (
  <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route path="/" component={AppContainer}/>
          <Route path="/" component={Home}/>
        </Switch>
      </Router>
  </Provider>
);

render(router, document.getElementById('app'));
