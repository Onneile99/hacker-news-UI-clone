import React from 'react';
import PropTypes from 'prop-types';

// Components
import CommentCard from './CommentCard';
import Navbar from './Navbar';

const ArticlePage = ({ article, comments }) => (
  <div>
    <Navbar />
    <section className="message-body">
      <h1 className="title is-5">
        {article.title}{' '}
        <span className="tag is-light">{article.belongs_to}</span>
      </h1>
      <p className="subtitle is-7">
        submited by {article.created_by}, {article.votes} votes
      </p>
      <p className="content is-size-6 has-text-black">{article.body}</p>
      <i className="icon fa fa-chevron-up" aria-hidden="true" />
      <i className="icon fa fa-chevron-down" aria-hidden="true" />
    </section>
    <section className="message-body">
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
    </section>
    <section className="container is-fluid">
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
    </section>
  </div>
);

ArticlePage.propTypes = {
  article: PropTypes.object.isRequired,
  comments: PropTypes.array.isRequired
};

export default ArticlePage;
