import React from 'react';
import PropTypes from 'prop-types';

// Components
import CommentCard from './CommentCard';

const ArticleSingle = ({ article, comments }) => {
  return (
    <div>
      <h3>Title: {article.title}</h3>
      <p>Body: {article.body}</p>
      <p>Votes: {article.votes}</p>
      <p>Topic: {article.belongs_to}</p>
      <p>Author: {article.created_by}</p>
      <h1>Comments:</h1>
      {comments.map(comment => (
        <CommentCard
          body={comment.body}
          votes={comment.votes}
          created_by={comment.created_by}
          created_at={comment.created_at}
          key={comment._id}
        />
      ))}
    </div>
  );
};

ArticleSingle.propTypes = {
  article: PropTypes.object.isRequired,
  comments: PropTypes.array.isRequired
};

export default ArticleSingle;
