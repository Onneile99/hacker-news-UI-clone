import React from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';
import ArticleCard from './ArticleCard';
import TopicsItem from './TopicsItem';
import * as actions from '../actions/actions';
import PropTypes from 'prop-types';


class ArticleList extends React.Component {
  componentDidMount() {
    this.props.fetchArticles();
    this.props.fetchTopics();
  }

  render() {
    return (
      <div>
        <nav className="panel">
          <div className="panel-tabs">
            <a className="is-active">all</a>
            {this.props.topics.map(topic => <TopicsItem title={topic.title} slug={topic.slug} key={topic._id} />)}
          </div>
        </nav>
        <div id='ArticleList'>
          {this.props.loading && (
            <Spinner name="pacman" color="coral" fadeIn="none" />
          )}
          {this.props.articles.map(article => <ArticleCard title={article.title} votes={article.votes} key={article.title} />)}
        </div>
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

ArticleList.propTypes = {
  fetchArticles: PropTypes.func.isRequired,
  fetchTopics: PropTypes.func.isRequired,
  articles: PropTypes.array.isRequired,
  topics: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);