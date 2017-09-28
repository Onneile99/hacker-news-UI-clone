import React from 'react';
import PropTypes from 'prop-types';

// REDUX
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';

// COMPONENTS
import ArticlePage from '../presentational/ArticlePage';

class ArticlePageContainer extends React.Component {
  componentDidMount () {
    this.props.fetchArticleById(this.props.match.params.article_id);
    this.props.fetchComments(this.props.match.params.article_id);
  }

  render () {
    return (
      <div>
        <ArticlePage
          article={this.props.article}
          comments={this.props.comments}
          alterCommentVotes={this.props.alterCommentVotes}
          alterArticleVotes={this.props.alterArticleVotes}
          addComment={this.props.addComment}
          deleteComment={this.props.deleteComment}
        />
      </div>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchArticleById: id => {
      dispatch(actions.fetchArticleById(id));
    },
    fetchComments: articleId => {
      dispatch(actions.fetchComments(articleId));
    },
    alterCommentVotes: (comment_id, vote) => {
      dispatch(actions.alterCommentVotes(comment_id, vote));
    },
    alterArticleVotes: (article_id, vote) => {
      dispatch(actions.alterArticleVotes(article_id, vote));
    },
    addComment: (article_id, values = {}) => {
      dispatch(actions.addComment(article_id, values));
    },
    deleteComment: (comment_id, user) => {
      dispatch(actions.deleteComment(comment_id, user));
    }  
  };
}

function mapStateToProps (state) {
  const sortedComments = state.comments.data.sort(function (a, b) {
    return b.votes - a.votes;
  });
  return {
    article: state.article.articleById,
    comments: sortedComments,
    loading: state.loading,
  };
}

ArticlePageContainer.propTypes = {
  match: PropTypes.object.isRequired,
  article: PropTypes.object.isRequired,
  comments: PropTypes.array.isRequired,
  fetchArticleById: PropTypes.func.isRequired,
  fetchComments: PropTypes.func.isRequired,
  alterCommentVotes: PropTypes.func.isRequired,
  alterArticleVotes: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(
  ArticlePageContainer
);
