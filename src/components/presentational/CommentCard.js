import React from 'react';
import PropTypes from 'prop-types';
import { secondsToTimeString } from '../../helpers/secondsToTimeString';

// Components
import CommentVotingSegment from './CommentVotingSegment';

const CommentCard = ({ body, votes, created_by, created_at, alterCommentVotes, comment_id}) => {
  const currentDate = Date.now();
  const differenceString = secondsToTimeString(
    (currentDate - created_at) / 1000.0
  );

  return (
    <div className="message-body">
      <div className="media">
        <div className="media-left">
          <CommentVotingSegment
            comment_id={comment_id}
            alterCommentVotes={alterCommentVotes}
          />
        </div>
        <div className="media-content is-size-7 has-text-black">
          <p className="subtitle is-7">
            {`submitted ${differenceString} ago by ${created_by}, ${votes} votes`}
          </p>
          {body}
        </div>
      </div>
    </div>
  );
};

CommentCard.propTypes = {
  body: PropTypes.string.isRequired,
  comment_id: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  created_at: PropTypes.number.isRequired,
  created_by: PropTypes.string.isRequired,
  alterCommentVotes: PropTypes.func.isRequired
};

export default CommentCard;
