import React from 'react';
import PropTypes from 'prop-types';

const ArticleVotingSegment = ({ votes }) => (
  <div className="tile is-ancestor">
    <div className="tile is-1 is-vertical">
      <div className="tile">
        <i className="fa fa-chevron-up" aria-hidden="true" />
      </div>
      <div className="tile">{votes}</div>
      <div className="tile">
        <i className="fa fa-chevron-down" aria-hidden="true" />
      </div>
    </div>
  </div>
);

ArticleVotingSegment.propTypes = {
  votes: PropTypes.number.isRequired
};

export default ArticleVotingSegment;
