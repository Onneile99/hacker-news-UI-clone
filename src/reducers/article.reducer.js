import * as types from '../actions/types';

export const initialState = {
  article: {},
  error: null, 
  loading: false
};

function reducer (prevState = initialState, action = {}) {
  if (!action) return prevState;

  if (action.type === types.FETCH_ARTICLE_BY_ID_REQUEST) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.FETCH_ARTICLE_BY_ID_SUCCESS) {
    const newState = Object.assign({}, prevState);
    newState.article = Object.assign({}, prevState.article, action.payload.article);
    newState.loading = false;
    return newState;
  }

  if (action.type === types.FETCH_ARTICLE_BY_ID_FAILED) {
    const newState = Object.assign({}, prevState);
    newState.error = action.payload;
    newState.article = prevState.article;
    newState.loading = false;
    return newState;
  }

  return prevState;
}

export default reducer;