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

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/" component={AppContainer} />
        <Route path="/" component={Home} />
        <Route path="/topics/(:topic_name)/articles" component={Home} />
      </Switch>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
