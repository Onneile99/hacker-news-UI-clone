// import * as types from '../actions/types';

const initialState = {
  articles: [],
  selectedTopic: null
};

function reducer (prevState = initialState, action) {
  if (!action) return prevState;
  const newState = Object.assign({}, prevState);


  return newState;
}

export default reducer;
