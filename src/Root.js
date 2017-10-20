import App from './components/presentational/App';
import AppContainer from './components/containers/AppContainer';
import ArticlePageContainer from './components/containers/ArticlePageContainer';

import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact={true} path="/articles/:article_id" component={ArticlePageContainer} />
        <Route path="/" component={AppContainer} />
        <Route path="/topics/(:topic_name)/articles" component={App} />
      </Switch>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
