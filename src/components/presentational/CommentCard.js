import React from 'react';
import PropTypes from 'prop-types';

const CommentCard = ({ body, votes, created_by, created_at }) => {
  let date = new Date(created_at);
  return (
    <article className="message is-dark">
      <div className="message-body">
        <p>
          {created_by} on {date.toDateString()}, {votes} votes
        </p>
        <p className="content">{body}</p>
        <p>
          <span>
            <i className="fa fa-arrow-up" aria-hidden="true" />
          </span>{' '}
          <span>
            <i className="fa fa-arrow-down" aria-hidden="true" />
          </span>
        </p>
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
