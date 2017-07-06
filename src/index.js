import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import './css/bulma.css';
import './css/font-awesome.css';

import App from './components/App';
import ArticleList from './components/ArticleList';
import reducer from './reducer/reducer';

const store = createStore(reducer);
const history = createBrowserHistory();

ReactDOM.render(<Provider store={store}>
                  <Router history={history}>
                    <App>
                    <Switch>
                      <Route exact path='/' component={ArticleList} />
                    </Switch>
                    </App>
                  </Router>
                </Provider>, document.getElementById('app'));
