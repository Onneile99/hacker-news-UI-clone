import { expect } from 'chai';
import reducer from '../src/reducers/article.reducer';
import { initialState } from '../src/reducers/article.reducer';
import * as actions from '../src/actions/actions';

describe('ARTICLE REDUCER', () => {
  it('is a function', () => {
    expect(reducer).to.be.a('function');
  });
  describe('fetchArticleById', () => {
    it('add one article to the new state', () => {
      const action = actions.fetchArticleByIdSuccess({
        article: { title: 'test article' }
      });
      const newState = reducer(initialState, action);
      expect(newState.articleById).to.be.an('object');
      expect(newState.articleById).to.eql({ title: 'test article' });
    });
    it('changes the loading property in the new state', () => {
      const action = actions.fetchArticleByIdRequest();
      const newState = reducer(initialState, action);
      expect(newState.loading).to.be.true;
    });
    it('returns the error if it fails', () => {
      const action = actions.fetchArticleByIdFailed('error');
      const newState = reducer(initialState, action);
      expect(newState.error).to.eql('error');
    });
  });
  describe('alterArticleVotes', () => {
    it('alters article votes, and adds the selected article to state', () => {
      const payload = { _id: 1, votes: 5 };
      const action = actions.alterArticleVotesSuccess(payload);
      const prevState = {
        articleById: { _id: 1, votes: 4 },
        error: null,
        loading: false
      };
      const newState = reducer(prevState, action);
      expect(newState.articleById).to.be.an('object');
      expect(newState.articleById).to.eql({ _id: 1, votes: 5 });
    });
    it('changes the loading property in the new state', done => {
      const action = actions.alterArticleVotesRequest();
      const newState = reducer(initialState, action);
      done();
      expect(newState.loading).to.be.true;
    });
    it('returns the error if it fails', () => {
      const action = actions.alterArticleVotesFailed('error');
      const newState = reducer(initialState, action);
      expect(newState.error).to.eql('error');
    });
  });
});
