import React from 'react';
import PropTypes from 'prop-types';

const ArticleCardFull = ({ article }) => (
  <div>
    <h1 className="title is-5">
      {article.title} <span className="tag is-light">{article.belongs_to}</span>
    </h1>
    <p className="subtitle is-7">
      submited by {article.created_by}, {article.votes} votes
    </p>
    <p className="content is-size-6 has-text-black">{article.body}</p>
    <i className="icon fa fa-chevron-up" aria-hidden="true" />
    <i className="icon fa fa-chevron-down" aria-hidden="true" />
  </div>
);

ArticleCardFull.propTypes = {
  article: PropTypes.object.isRequired
};

export default ArticleCardFull;
