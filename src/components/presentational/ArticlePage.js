import React from 'react';
import PropTypes from 'prop-types';

// Components
import Navbar from './Navbar';
import CommentList from './CommentList';
import CommentAdd from './CommentAdd';
import ArticleCardFull from './ArticleCardFull';

const ArticlePage = ({ article, comments }) => (
  <div>
    <Navbar />
    <section className="message-body">
      <ArticleCardFull article={article}/>
    </section>
    <section className="message-body">
      <CommentAdd/>
    </section>
    <section className="container is-fluid">
      <CommentList comments={comments}/>
    </section>
  </div>
);

ArticlePage.propTypes = {
  article: PropTypes.object.isRequired,
  comments: PropTypes.array.isRequired
};

export default ArticlePage;
