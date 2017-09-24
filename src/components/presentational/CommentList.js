import React from 'react';
import PropTypes from 'prop-types';

// Components
import CommentCard from './CommentCard';

const CommentList = ({ comments }) => (
  <div id="CommentList">
    all {comments.length} comments
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

CommentList.propTypes = {
  comments: PropTypes.array.isRequired
};

export default CommentList;
