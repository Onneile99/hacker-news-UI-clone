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
import App from './components/presentational/App';
import ArticlePageContainer from './components/containers/ArticlePageContainer';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact={true} path="/articles/:article_id" component={ArticlePageContainer} />
        <Route path="/" component={AppContainer} />
        <Route exact={true} path="/" component={App} />
        <Route path="/topics/(:topic_name)/articles" component={App} />
      </Switch>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
