import React from 'react';
import {connect} from 'react-redux';
import Spinner from 'react-spinkit';
import ArticleCard from './ArticleCard';
import * as actions from '../actions/actions';


class ArticleList extends React.Component {
  componentDidMount () {
    this.props.fetchArticles();
  }
  
  render () {
    return (
      <div id='ArticleList'>
        {this.props.loading && (
          <Spinner name="pacman" color="coral" fadeIn="none"/>
        )}
        {console.log(this.props.articles.data)}
        {this.props.articles.map(article => <ArticleCard title={article.title} votes={article.votes} key={article.title} />)}
      </div>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchArticles: () => {
      dispatch(actions.fetchArticles());
    }
  };
}

function mapStateToProps (state) {
  return {
    articles: state.articles.data,
    loading: state.loading
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);