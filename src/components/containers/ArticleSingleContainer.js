import React from 'react';
import PropTypes from 'prop-types';

// REDUX
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';

// COMPONENTS
import ArticleSingle from '../presentational/ArticleSingle';

class ArticleSingleContainer extends React.Component {
  componentDidMount () {
    this.props.fetchArticleById(this.props.match.params.article_id);
    this.props.fetchComments(this.props.match.params.article_id);
  }

  render () {
    return (
      <div>
        <ArticleSingle article={this.props.article}/>
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

ArticleSingleContainer.propTypes = {
  match: PropTypes.object.isRequired,
  article: PropTypes.object.isRequired,
  comments: PropTypes.array.isRequired,
  fetchArticleById: PropTypes.func.isRequired,
  fetchComments: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleSingleContainer);
