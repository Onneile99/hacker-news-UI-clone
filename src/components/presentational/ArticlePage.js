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
    <main>
      <Navbar />
      <ArticleCardFull
        article={article}
        alterArticleVotes={alterArticleVotes}
      />
      <CommentAdd addComment={addComment} article={article} />
      <CommentList
        comments={comments}
        alterCommentVotes={alterCommentVotes}
        deleteComment={deleteComment}
      />
    </main>
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
