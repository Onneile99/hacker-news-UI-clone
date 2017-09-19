import React from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';

class ArticleSingleContainer extends React.Component {
  componentDidMount () {
    this.props.fetchArticleById(this.props.match.params.article_id);
  }

  render () {
    return (
      <div>
        {this.props.match.params.article_id}
      </div>
    );
  }
}
function mapDispatchToProps (dispatch) {
  return {
    fetchArticleById: id => {
      dispatch(actions.fetchArticleById(id));
    }
  };
}
function mapStateToProps (state) {
  return {
    article: state.articles.article,
    loading: state.loading
  };
}

ArticleSingleContainer.propTypes = {
  match: PropTypes.object.isRequired,
  fetchArticleById: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleSingleContainer);
