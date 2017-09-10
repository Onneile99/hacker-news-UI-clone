import React from 'react';
import PropTypes from 'prop-types';

// Components
import ArticleCard from './ArticleCard';

const ArticleList = ({ articles }) => {
  return (
    <div>
      <div id="ArticleList">
        {articles.map(article => (
          <ArticleCard
            title={article.title}
            votes={article.votes}
            id={article._id}
            key={article.title}
          />
        ))}
      </div>
    </div>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired,
  topics: PropTypes.array.isRequired,
};

export default ArticleList;
