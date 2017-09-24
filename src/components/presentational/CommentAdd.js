import React from 'react';

const CommentAdd = () => (
  <div className="media-content">
    <div className="field">
      <p className="control">
        <textarea className="textarea " placeholder="I hereby comment..." />
      </p>
    </div>
    <div className="field">
      <p className="control">
        <button className="button">add comment</button>
      </p>
    </div>
  </div>
);

export default CommentAdd;
