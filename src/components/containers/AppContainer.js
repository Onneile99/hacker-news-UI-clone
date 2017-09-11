import React from 'react';
import PropTypes from 'prop-types';
import Home from '../presentational/Home';

// Redux
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';

class AppContainer extends React.Component {
  componentDidMount () {
    this.props.fetchArticles();
    this.props.fetchTopics();
    // this.props.fetchTopicArticles('football');
  }

  render () {
    return (
      <Home
        articles={this.props.articles}
        topics={this.props.topics}
        loading={this.props.loading}
        fetchTopicArticles={this.props.fetchTopicArticles}
        fetchArticles={this.props.fetchArticles}
      />
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchArticles: () => {
      dispatch(actions.fetchArticles());
    },
    fetchTopics: () => {
      dispatch(actions.fetchTopics());
    },
    fetchTopicArticles: topic => {
      dispatch(actions.fetchTopicArticles(topic));
    }
  };
}

function mapStateToProps (state) {
  return {
    articles: state.articles.data,
    topics: state.topics.data,
    loading: state.loading
  };
}

AppContainer.propTypes = {
  articles: PropTypes.array.isRequired,
  topics: PropTypes.array.isRequired,
  loading: PropTypes.bool,
  fetchArticles: PropTypes.func.isRequired,
  fetchTopics: PropTypes.func.isRequired,
  fetchTopicArticles: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);