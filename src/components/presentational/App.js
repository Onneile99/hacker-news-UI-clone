import React from 'react';
import PropTypes from 'prop-types';

// Components
import Spinner from 'react-spinkit';
import ArticleList from './ArticleList';
import TopicsSubNav from './TopicsSubNav';
import Navbar from './Navbar';

const App = ({
  loading,
  articles,
  topics,
  fetchTopicArticles,
  fetchArticles
}) => (
  <div>
    <Navbar />
    <div>
      {loading && <Spinner name="pacman" color="coral" fadeIn="none" />}
      <TopicsSubNav
        topics={topics}
        onTopicClick={fetchTopicArticles}
        onAllClick={fetchArticles}
      />
    </div>
    {loading && <Spinner name="pacman" color="coral" fadeIn="none" />}
    <ArticleList articles={articles} topics={topics} />
  </div>
);

App.propTypes = {
  articles: PropTypes.array.isRequired,
  topics: PropTypes.array.isRequired,
  loading: PropTypes.bool,
  fetchTopicArticles: PropTypes.func.isRequired,
  fetchArticles: PropTypes.func.isRequired
};

export default App;
