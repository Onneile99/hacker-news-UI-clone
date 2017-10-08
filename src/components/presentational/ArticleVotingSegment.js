import React from 'react';
import PropTypes from 'prop-types';

const ArticleVotingSegment = ({ votes, article_id, alterArticleVotes }) => (
  <div className="tile is-ancestor">
    <div className="tile is-1 is-vertical">
      <div className="tile">
        <a
          onClick={() => alterArticleVotes(article_id, 'up')}
          className="fa fa-chevron-up"
          aria-hidden="true"
          alt="upvote"
        />
      </div>
      <div className="tile">{votes}</div>
      <div className="tile">
        <a
          onClick={() => alterArticleVotes(article_id, 'down')}
          className="fa fa-chevron-down"
          aria-hidden="true"
          alt="downvote"
        />
      </div>
    </div>
  </div>
);

ArticleVotingSegment.propTypes = {
  votes: PropTypes.number.isRequired,
  article_id: PropTypes.string.isRequired,
  alterArticleVotes: PropTypes.func.isRequired
};

export default ArticleVotingSegment;
