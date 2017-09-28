import React from 'react';
import PropTypes from 'prop-types';

// Components
import CommentCard from './CommentCard';

const CommentList = ({ comments, alterCommentVotes, deleteComment }) => (
  <div id="CommentList">
    all {comments.length} comments | sorted by: votes 
    {comments.map(comment => (
      <CommentCard
        body={comment.body}
        votes={comment.votes}
        created_by={comment.created_by}
        created_at={comment.created_at}
        key={comment._id}
        comment_id={comment._id}
        alterCommentVotes={alterCommentVotes}
        deleteComment={deleteComment}
      />
    ))}
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
  alterCommentVotes: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired
};

export default CommentList;
