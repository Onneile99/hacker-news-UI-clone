import React from 'react';
import PropTypes from 'prop-types';

// Components
import CommentCard from './CommentCard';

const ArticlePage = ({ article, comments }) => {
  return (
    <div className="container is-fluid">
      <section className="box">
        <h1 className="title is-3">
          {article.title}{' '}
          <span className="tag is-light">{article.belongs_to}</span>
        </h1>
        <p className="subtitle is-6">
          submited by {article.created_by}, {article.votes} votes
        </p>
        <p className="content">{article.body}</p>
        <p>
        <span>
            <i className="fa fa-chevron-up" aria-hidden="true" />
          </span>{' '}
          <span>
            <i className="fa fa-chevron-down" aria-hidden="true" />
          </span>
        </p>
      </section>
      <section className="container">
        <h2 className="subtitle is-5">all {comments.length} comments</h2>
        {comments.map(comment => (
          <CommentCard
            body={comment.body}
            votes={comment.votes}
            created_by={comment.created_by}
            created_at={comment.created_at}
            key={comment._id}
          />
        ))}
      </section>
    </div>
  );
};

ArticlePage.propTypes = {
  article: PropTypes.object.isRequired,
  comments: PropTypes.array.isRequired
};

export default ArticlePage;
