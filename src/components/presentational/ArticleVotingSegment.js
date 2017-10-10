import React from 'react';
import PropTypes from 'prop-types';

const ArticleVotingSegment = ({ votes, article_id, alterArticleVotes }) => (
  <aside className="media-left">
    <div className="tile is-ancestor">
      <div className="tile is-1 is-vertical">
        <div className="tile">
          <i
            onClick={() => alterArticleVotes(article_id, 'up')}
            className="fa fa-chevron-up"
            aria-hidden="true"
            alt="upvote"
          />
        </div>
        <p className="tile">{votes}</p>
        <div className="tile">
          <i
            onClick={() => alterArticleVotes(article_id, 'down')}
            className="fa fa-chevron-down"
            aria-hidden="true"
            alt="downvote"
          />
        </div>
      </div>
    </div>
  </aside>
);

ArticleVotingSegment.propTypes = {
  votes: PropTypes.number.isRequired,
  article_id: PropTypes.string.isRequired,
  alterArticleVotes: PropTypes.func.isRequired
};

export default ArticleVotingSegment;
