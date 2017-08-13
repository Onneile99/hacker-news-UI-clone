import * as types from '../actions/types';

export const initialState = {
  articles: [],
  selectedTopic: null, 
  loading: false
};

export function reducer (prevState = initialState, action = {}) {
  if (!action) return prevState;

  if (action.type === types.FETCH_ARTICLE_REQUEST) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.FETCH_ARTICLE_SUCCESS) {
    const newState = Object.assign({}, prevState);
    newState.articles = prevState.articles.concat(action.data);
    return newState;
  }

  if (action.type === types.FETCH_ARTICLE_FAILED) {
    return action.data;
  }

  return prevState;
}