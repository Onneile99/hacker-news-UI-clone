import React from 'react';
import PropTypes from 'prop-types';

// Components
import ArticleCardMini from './ArticleCardMini';

const ArticleList = ({ articles, alterArticleVotes }) => (
  <section id="ArticleList">
    {articles.map(article => (
      <ArticleCardMini
        title={article.title}
        votes={article.votes}
        id={article._id}
        created_by={article.created_by}
        key={article.title}
        alterArticleVotes={alterArticleVotes}
        belongs_to={article.belongs_to}
      />
    ))}
  </section>
);

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired,
  topics: PropTypes.array.isRequired,
  alterArticleVotes: PropTypes.func.isRequired
};

export default ArticleList;
