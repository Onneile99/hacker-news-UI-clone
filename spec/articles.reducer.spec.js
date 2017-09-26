import { expect } from 'chai';
import reducer from '../src/reducers/articles.reducer';
import { initialState } from '../src/reducers/articles.reducer';
import * as actions from '../src/actions/actions';

describe('ARTICLES REDUCER', () => {
  it('is a function', () => {
    expect(reducer).to.be.a('function');
  });
  describe('fetchArticles', () => {
    it('adds a list of articles to the new state', () => {
      const action = actions.fetchArticlesSuccess({
        articles: [{ '2': 2 }, { '1': 1 }]
      });
      const newState = reducer(initialState, action);
      expect(newState.data.articles).to.be.an('array');
      expect(newState.data).to.eql({
        articles: [{ '2': 2 }, { '1': 1 }]
      });
    });
    it('changes the loading property in the new state', () => {
      const action = actions.fetchArticlesRequest();
      const newState = reducer(initialState, action);
      expect(newState.loading).to.be.true;
    });
    it('returns the error if it fails', () => {
      const action = actions.fetchArticlesFailed('error');
      const newState = reducer(initialState, action);
      expect(newState.error).to.eql('error');
    });
  });
  describe('fetchTopicArticles', () => {
    it('adds a list of articles for a topic to the new state', () => {
      const action = actions.fetchTopicArticlesSuccess({
        articles: [{ '2': 2 }, { '1': 1 }]
      });
      const newState = reducer(initialState, action);
      expect(newState.data.articles).to.be.an('array');
      expect(newState.data).to.eql({
        articles: [{ '2': 2 }, { '1': 1 }]
      });
    });
    it('changes the loading property in the new state', () => {
      const action = actions.fetchTopicArticlesRequest();
      const newState = reducer(initialState, action);
      expect(newState.loading).to.be.true;
    });
    it('returns the error if it fails', () => {
      const action = actions.fetchTopicArticlesFailed('error');
      const newState = reducer(initialState, action);
      expect(newState.error).to.eql('error');
    });
  });
  describe('alterArticleVotes', () => {
    it('alters article votes, and adds the selected article to state', () => {
      const payload = { _id: 1, votes: 1 };
      const action = actions.alterArticleVotesSuccess(payload);
      const prevState = {
        data: [{ _id: 1, votes: 0 }, { _id: 2, votes: 3 }],
        error: null,
        loading: false
      };
      const newState = reducer(prevState, action);
      expect(newState.data).to.be.an('array');
      expect(newState.data.length).to.equal(2);
      expect(newState.data).to.eql([{ _id: 1, votes: 1 }, { _id: 2, votes: 3 }]);
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
