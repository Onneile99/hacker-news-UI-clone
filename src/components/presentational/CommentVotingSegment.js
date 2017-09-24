import React from 'react';
// import PropTypes from 'prop-types';

const CommentVotingSegment = () => (
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
);

CommentVotingSegment.propTypes = {};

export default CommentVotingSegment;
