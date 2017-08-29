import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// REDUX
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import createBrowserHistory from 'history/createBrowserHistory';

// STYLING
import './css/bulma.css';
import './css/font-awesome.css';

// COMPONENTS
import App from './components/App';
import ArticleList from './components/ArticleList';
import reducer from './reducer/index';

const store = createStore(reducer, applyMiddleware(thunk, logger));
const history = createBrowserHistory();

const router = (
  <Provider store={store}>
    <Router history={history}>
      <App>
        <Switch>
          <Route path='/' component={ArticleList}>

          </Route>
        </Switch>
      </App>
    </Router>
  </Provider>
);

render(router, document.getElementById('app'));
