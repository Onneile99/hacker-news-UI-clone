import React from 'react';
import PropTypes from 'prop-types';

// Components
import Spinner from 'react-spinkit';
import ArticleCard from './ArticleCard';


const ArticleList = ({loading, articles}) => {
    return (
      <div>
        <div id='ArticleList'>
          {loading && (
            <Spinner name="pacman" color="coral" fadeIn="none" />
          )}
          {articles.map(article => <ArticleCard title={article.title} votes={article.votes} key={article.title} />)}
        </div>
      </div>
    );
}

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired,
  topics: PropTypes.array.isRequired,
};

export default ArticleList;