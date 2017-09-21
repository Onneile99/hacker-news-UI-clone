import React from 'react';
import PropTypes from 'prop-types';

const CommentCard = ({ body, votes, created_by, created_at }) => {
  let date = new Date(created_at);
  return (
    <article className="message is-dark">
      <div className="message-body">
        <p>{created_by} on {date.toDateString()}, {votes} votes</p>
        <p className="content">{body}</p>
      </div>
    </article>
  );
};

CommentCard.propTypes = {
  body: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  created_at: PropTypes.number.isRequired,
  created_by: PropTypes.string.isRequired
};

export default CommentCard;
