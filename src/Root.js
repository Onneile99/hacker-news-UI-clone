// REACT
import React from 'react';
import PropTypes from 'prop-types';

// REACT ROUTER
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// REDUX
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

// COMPONENTS
import AppContainer from './components/containers/AppContainer';
import Home from './components/presentational/Home';
import ArticleSingle from './components/presentational/ArticleSingle';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/articles/:article_id" component={ArticleSingle} />
        <Route path="/" component={AppContainer} />
        <Route exact path="/" component={Home} />
        <Route path="/topics/(:topic_name)/articles" component={Home} />
      </Switch>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
