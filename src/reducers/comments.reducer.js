import * as types from '../actions/types';

export const initialState = {
  data: [],
  comment: null,
  error: null, 
  loading: false
};

function reducer (prevState = initialState, action = {}) {
  if (!action) return prevState;

  if (action.type === types.FETCH_COMMENTS_REQUEST) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.FETCH_COMMENTS_SUCCESS) {
    const newState = Object.assign({}, prevState);
    newState.data = action.payload;
    newState.loading = false;
    return newState;
  }

  if (action.type === types.FETCH_COMMENTS_FAILED) {
    const newState = Object.assign({}, prevState);
    newState.error = action.payload;
    newState.data = [];
    newState.loading = false;
    return newState;
  }

  if (action.type === types.ALTER_COMMENT_VOTES_REQUEST) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.ALTER_COMMENT_VOTES_SUCCESS) {
    const newState = Object.assign({}, prevState);
    newState.data = prevState.data.reduce((acc, element) => {
      element._id === action.payload._id ? acc.push(action.payload) : acc.push(element);
      return acc;
    }, []);
    newState.loading = false;
    return newState;
  }
  if (action.type === types.ALTER_COMMENT_VOTES_FAILED) {
    const newState = Object.assign({}, prevState);
    newState.error = action.payload;
    newState.loading = false;
    return newState;
  }

  if (action.type === types.ADD_COMMENT_REQUEST) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.ADD_COMMENT_SUCCESS) {
    const newState = Object.assign({}, prevState);
    newState.data = prevState.data.concat([action.payload.newComment]);
    newState.loading = false;
    return newState;
  }

  if (action.type === types.ADD_COMMENT_FAILED) {
    const newState = Object.assign({}, prevState);
    newState.error = action.payload;
    newState.data = prevState.data || [];
    newState.loading = false;
    return newState;
  }

  return prevState;
}

export default reducer;