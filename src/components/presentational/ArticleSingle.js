import React from 'react';
import PropTypes from 'prop-types';

const ArticleSingle = ({ article }) => {
  return (
    <div>
      <h3>Title: {article.title}</h3>
      <p>Body: {article.body}</p>
      <p>Votes: {article.votes}</p>
      <p>Topic: {article.belongs_to}</p>
      <p>Author: {article.created_by}</p>
    </div>
  );
};

ArticleSingle.propTypes = {
  article: PropTypes.object.isRequired
};

export default ArticleSingle;
