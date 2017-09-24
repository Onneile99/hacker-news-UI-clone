import React from 'react';
import PropTypes from 'prop-types';

const CommentCard = ({ body, votes, created_by, created_at }) => {
  let date = new Date(created_at);
  return (
      <div className="message-body">
        <div className="media">
          <div className="media-left">
            <div className="tile is-ancestor">
              <div className="tile is-vertical">
                <div className="tile icon">
                  <i className="fa fa-chevron-up" aria-hidden="true" />
                </div>
                
                <div className="tile icon">
                  <i className="fa fa-chevron-down" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
          <div className="media-content is-size-7 has-text-black">
            <p className="subtitle is-7">
              {created_by} on {date.toDateString()}, {votes} votes
            </p>
            {body}
          </div>
        </div>
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
