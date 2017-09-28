import React from 'react';
import PropTypes from 'prop-types';

// Components
import Navbar from './Navbar';
import CommentList from './CommentList';
import CommentAdd from './CommentAdd';
import ArticleCardFull from './ArticleCardFull';

const ArticlePage = props => {
  const {
    article,
    comments,
    alterCommentVotes,
    alterArticleVotes,
    addComment,
    deleteComment
  } = props;
  return (
    <div>
      <Navbar />
      <section className="message-body">
        <ArticleCardFull
          article={article}
          alterArticleVotes={alterArticleVotes}
        />
      </section>
      <section className="message-body">
        <CommentAdd addComment={addComment} article={article}/>
      </section>
      <section className="container is-fluid">
        <CommentList
          comments={comments}
          alterCommentVotes={alterCommentVotes}
          deleteComment={deleteComment}
        />
      </section>
    </div>
  );
};

ArticlePage.propTypes = {
  article: PropTypes.object.isRequired,
  comments: PropTypes.array.isRequired,
  alterCommentVotes: PropTypes.func.isRequired,
  alterArticleVotes: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired
};

export default ArticlePage;
