import reducer from './articles.reducer';
import { initialState } from './articles.reducer';
import * as actions from '../actions/actions';

describe('ARTICLES REDUCER', () => {
  test('is a function', () => {
    expect(typeof reducer).toBe('function');
  });
  describe('fetchArticles', () => {
    test('adds a list of articles to the new state', () => {
      const action = actions.fetchArticlesSuccess({
        articles: [{ '2': 2 }, { '1': 1 }]
      });
      const newState = reducer(initialState, action);
      expect(Array.isArray(newState.data.articles)).toBe(true);
      expect(newState.data).toEqual({
        articles: [{ '2': 2 }, { '1': 1 }]
      });
    });
    test('changes the loading property in the new state', () => {
      const action = actions.fetchArticlesRequest();
      const newState = reducer(initialState, action);
      expect(newState.loading).toBe(true);
    });
    test('returns the error if it fails', () => {
      const action = actions.fetchArticlesFailed('error');
      const newState = reducer(initialState, action);
      expect(newState.error).toEqual('error');
    });
  });
  describe('fetchTopicArticles', () => {
    test('adds a list of articles for a topic to the new state', () => {
      const action = actions.fetchTopicArticlesSuccess({
        articles: [{ '2': 2 }, { '1': 1 }]
      });
      const newState = reducer(initialState, action);
      expect(Array.isArray(newState.data.articles)).toBe(true);
      expect(newState.data).toEqual({
        articles: [{ '2': 2 }, { '1': 1 }]
      });
    });
    test('changes the loading property in the new state', () => {
      const action = actions.fetchTopicArticlesRequest();
      const newState = reducer(initialState, action);
      expect(newState.loading).toBe(true);
    });
    test('returns the error if it fails', () => {
      const action = actions.fetchTopicArticlesFailed('error');
      const newState = reducer(initialState, action);
      expect(newState.error).toEqual('error');
    });
  });
  describe('alterArticleVotes', () => {
    test('alters article votes, and adds the selected article to state', () => {
      const payload = { _id: 1, votes: 1 };
      const action = actions.alterArticleVotesSuccess(payload);
      const prevState = {
        data: [{ _id: 1, votes: 0 }, { _id: 2, votes: 3 }],
        error: null,
        loading: false
      };
      const newState = reducer(prevState, action);
      expect(Array.isArray(newState.data)).toBe(true);
      expect(newState.data.length).toBe(2);
      expect(newState.data).toEqual([{ _id: 1, votes: 1 }, { _id: 2, votes: 3 }]);
    });
    test('changes the loading property in the new state', done => {
      const action = actions.alterArticleVotesRequest();
      const newState = reducer(initialState, action);
      done();
      expect(newState.loading).toBe(true);
    });
    test('returns the error if it fails', () => {
      const action = actions.alterArticleVotesFailed('error');
      const newState = reducer(initialState, action);
      expect(newState.error).toEqual('error');
    });
  });
});
