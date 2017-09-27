import * as types from '../actions/types';

export const initialState = {
  data: [],
  error: null, 
  loading: false
};

function reducer (prevState = initialState, action = {}) {
  if (!action) return prevState;

  if (action.type === types.FETCH_ARTICLES_REQUEST) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.FETCH_ARTICLES_SUCCESS) {
    const newState = Object.assign({}, prevState);
    newState.data = action.payload;
    newState.loading = false;
    return newState;
  }

  if (action.type === types.FETCH_ARTICLES_FAILED) {
    const newState = Object.assign({}, prevState);
    newState.error = action.payload;
    newState.data = [];
    newState.loading = false;
    return newState;
  }

  if (action.type === types.FETCH_TOPIC_ARTICLES_REQUEST) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.FETCH_TOPIC_ARTICLES_SUCCESS) {
    const newState = Object.assign({}, prevState);
    newState.data = action.payload;
    newState.loading = false;
    return newState;
  }

  if (action.type === types.FETCH_TOPIC_ARTICLES_FAILED) {
    const newState = Object.assign({}, prevState);
    newState.error = action.payload;
    newState.data = [];
    newState.loading = false;
    return newState;
  }

  if (action.type === types.ALTER_ARTICLE_VOTES_REQUEST) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.ALTER_ARTICLE_VOTES_SUCCESS) {
    const newState = Object.assign({}, prevState);
    newState.data = prevState.data.reduce((acc, element) => {
      element._id === action.payload._id ? acc.push(action.payload) : acc.push(element);
      return acc;
    }, []);
    newState.loading = false;
    return newState;
  }
  if (action.type === types.ALTER_ARTICLE_VOTES_FAILED) {
    const newState = Object.assign({}, prevState);
    newState.error = action.payload;
    newState.loading = false;
    return newState;
  }

  return prevState;
}

export default reducer;