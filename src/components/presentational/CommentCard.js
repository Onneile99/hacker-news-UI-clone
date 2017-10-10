import React from 'react';
import PropTypes from 'prop-types';
import { secondsToTimeString } from '../../helpers/secondsToTimeString';

// Components
import CommentVotingSegment from './CommentVotingSegment';

const CommentCard = props => {
  const {
    body,
    votes,
    created_by,
    created_at,
    alterCommentVotes,
    comment_id,
    deleteComment
  } = props;
  const currentDate = Date.now();
  const differenceString = secondsToTimeString(
    (currentDate - created_at) / 1000.0
  );

  return (
    <div className="message-body">
      <div className="media">
        <aside className="media-left">
          <CommentVotingSegment
            comment_id={comment_id}
            alterCommentVotes={alterCommentVotes}
          />
        </aside>
        <article className="media-content is-size-7 has-text-black">
          <aside className="subtitle is-7">
            {`submitted ${differenceString} ago by ${created_by}, ${votes} votes | `}
            <a onClick={() => deleteComment(comment_id, created_by)}>delete</a>
          </aside>
          {body}
        </article>
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
  alterCommentVotes: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired
};

export default CommentCard;
