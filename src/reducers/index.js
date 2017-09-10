import {combineReducers} from 'redux';
import articlesReducer from './articles.reducer.js';
import topicsReducer from './topics.reducer.js';

import { routerReducer } from 'react-router-redux';

export default combineReducers({
  articles: articlesReducer,
  topics: topicsReducer,
  // comments: commentsReducer
  routing: routerReducer
});