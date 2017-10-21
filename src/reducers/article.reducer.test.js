import reducer from './article.reducer';
import { initialState } from './article.reducer';
import * as actions from '../actions/actions';

describe('ARTICLE REDUCER', () => {
  test('is a function', () => {
    expect(typeof reducer).toBe('function');
  });
  describe('fetchArticleById', () => {
    test('add one article to the new state', () => {
      const action = actions.fetchArticleByIdSuccess({
        article: { title: 'test article' }
      });
      const newState = reducer(initialState, action);
      expect(typeof newState.articleById).toBe('object');
      expect(newState.articleById).toEqual({ title: 'test article' });
    });
    test('changes the loading property in the new state', () => {
      const action = actions.fetchArticleByIdRequest();
      const newState = reducer(initialState, action);
      expect(newState.loading).toBe(true);
    });
    test('returns the error if it fails', () => {
      const action = actions.fetchArticleByIdFailed('error');
      const newState = reducer(initialState, action);
      expect(newState.error).toEqual('error');
    });
  });
  describe('alterArticleVotes', () => {
    test('alters article votes, and adds the selected article to state', () => {
      const payload = { _id: 1, votes: 5 };
      const action = actions.alterArticleVotesSuccess(payload);
      const prevState = {
        articleById: { _id: 1, votes: 4 },
        error: null,
        loading: false
      };
      const newState = reducer(prevState, action);
      expect(typeof newState.articleById).toBe('object');
      expect(newState.articleById).toEqual({ _id: 1, votes: 5 });
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
