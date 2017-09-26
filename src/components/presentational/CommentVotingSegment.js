import React from 'react';
import PropTypes from 'prop-types';

const CommentVotingSegment = ({ comment_id, alterCommentVotes }) => (
  <div className="tile is-ancestor">
    <div className="tile is-vertical">
      <div className="tile icon">
        <i
          onClick={() => alterCommentVotes(comment_id, 'up')}
          className="fa fa-chevron-up"
          aria-hidden="true"
        />
      </div>
      <div className="tile icon">
        <i
          onClick={() => alterCommentVotes(comment_id, 'down')}
          className="fa fa-chevron-down"
          aria-hidden="true"
        />
      </div>
    </div>
  </div>
);

CommentVotingSegment.propTypes = {
  alterCommentVotes: PropTypes.func.isRequired,
  comment_id: PropTypes.string.isRequired
};

export default CommentVotingSegment;
