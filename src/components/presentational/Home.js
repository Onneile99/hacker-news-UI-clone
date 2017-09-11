import React from 'react';
import PropTypes from 'prop-types';

// Components
import Spinner from 'react-spinkit';
import ArticleList from './ArticleList';
import TopicsSubNav from './TopicsSubNav';

const Home = ({
  loading,
  articles,
  topics,
  fetchTopicArticles,
  fetchArticles
}) => {
  return (
    <div>
      <h3 className="title is-3">Northcoders News</h3>
      <div id="TopicsSubNav">
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
};

Home.propTypes = {
  articles: PropTypes.array.isRequired,
  topics: PropTypes.array.isRequired,
  loading: PropTypes.bool,
  fetchTopicArticles: PropTypes.func.isRequired,
  fetchArticles: PropTypes.func.isRequired
};

export default Home;
