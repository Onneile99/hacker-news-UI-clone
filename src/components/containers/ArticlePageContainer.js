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
    alterCommentVotes: (article_id, vote) => {
      dispatch(actions.alterCommentVotes(article_id, vote));
    }
  };
}

function mapStateToProps (state) {
  return {
    article: state.article.articleById,
    comments: state.comments.data,
    loading: state.loading
  };
}

ArticlePageContainer.propTypes = {
  match: PropTypes.object.isRequired,
  article: PropTypes.object.isRequired,
  comments: PropTypes.array.isRequired,
  fetchArticleById: PropTypes.func.isRequired,
  fetchComments: PropTypes.func.isRequired,
  alterCommentVotes: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(
  ArticlePageContainer
);
