import React from 'react';
import PropTypes from 'prop-types';

const CommentCard = ({ body, votes, created_by, created_at }) => {
  let date = new Date(created_at);
  return (
    <div>
      <p>Body: {body}</p>
      <p>Votes: {votes}</p>
      <p>Author: {created_by}</p>
      <p>Posted at: {date.toDateString()}</p>
    </div>
  );
};

CommentCard.propTypes = {
  body: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  created_at: PropTypes.number.isRequired,
  created_by: PropTypes.string.isRequired
};

export default CommentCard;
