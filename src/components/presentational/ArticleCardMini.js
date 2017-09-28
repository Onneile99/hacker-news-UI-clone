import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Components
import ArticleVotingSegment from './ArticleVotingSegment';

const ArticleCardMini = props => {
  const { title, votes, id, created_by, alterArticleVotes, belongs_to } = props;
  return (
    <div className="container is-fluid">
      <div className="message-body">
        <article className="media">
          <div className="media-left">
            <ArticleVotingSegment votes={votes} article_id={id} alterArticleVotes={alterArticleVotes}/>
          </div>
          <Link to={`/articles/${id}`}>
            <div className="media-content">
              <h2 className="is-size-5">{title}</h2>
              <p className="subtitle is-7">submitted by {created_by} on {belongs_to}</p>
            </div>
          </Link>
        </article>
      </div>
    </div>
  );
};

ArticleCardMini.propTypes = {
  title: PropTypes.string.isRequired,
  created_by: PropTypes.string.isRequired,
  belongs_to: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  alterArticleVotes: PropTypes.func.isRequired
};

export default ArticleCardMini;
