import React from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

// Components
import Spinner from 'react-spinkit';
import ArticleList from './ArticleList';
import TopicsSubNav from './TopicsSubNav';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchArticles();
    this.props.fetchTopics();
  }
  render() {
    return (
      <div>
        <h3 className='title is-3'>Northcoders News</h3>
        <div id='TopicsSubNav'>
          {this.props.loading && (
            <Spinner name="pacman" color="coral" fadeIn="none" />
          )}
          <TopicsSubNav topics={this.props.topics}/>
        </div>
        {this.props.loading && (
            <Spinner name="pacman" color="coral" fadeIn="none" />
          )}
        <ArticleList articles={this.props.articles} topics={this.props.topics} loading={this.props.loading}/>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchArticles: () => {
      dispatch(actions.fetchArticles());
    },
    fetchTopics: () => {
      dispatch(actions.fetchTopics());
    }
  };
}

function mapStateToProps(state) {
  return {
    articles: state.articles.data,
    topics: state.topics.data,
    loading: state.loading
  };
}

App.propTypes = {
  articles: PropTypes.array.isRequired,
  topics: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
