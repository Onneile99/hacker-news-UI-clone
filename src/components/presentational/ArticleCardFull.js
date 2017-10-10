import React from 'react';
import PropTypes from 'prop-types';

const ArticleCardFull = ({ article, alterArticleVotes }) => (
  <section className="message-body">
    <article>
      <h1 className="title is-5">
        {article.title}{' '}
        <aside className="tag is-light">{article.belongs_to}</aside>
      </h1>
      <aside className="subtitle is-7">
        submited by {article.created_by}, {article.votes} votes
      </aside>
      <p className="content is-size-6 has-text-black">{article.body}</p>
    </article>
    <aside>
      <i
        onClick={() => alterArticleVotes(article._id, 'up')}
        className="icon fa fa-chevron-up"
        aria-hidden="true"
      />
      <i
        onClick={() => alterArticleVotes(article._id, 'down')}
        className="icon fa fa-chevron-down"
        aria-hidden="true"
      />
    </aside>
  </section>
);

ArticleCardFull.propTypes = {
  article: PropTypes.object.isRequired,
  alterArticleVotes: PropTypes.func.isRequired
};

export default ArticleCardFull;
