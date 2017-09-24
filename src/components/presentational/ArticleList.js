import React from 'react';
import PropTypes from 'prop-types';

// Components
import ArticleCardMini from './ArticleCardMini';

const ArticleList = ({ articles }) => (
  <div id="ArticleList">
    {articles.map(article => (
      <ArticleCardMini
        title={article.title}
        votes={article.votes}
        id={article._id}
        created_by={article.created_by}
        key={article.title}
      />
    ))}
  </div>
);

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired,
  topics: PropTypes.array.isRequired
};

export default ArticleList;
