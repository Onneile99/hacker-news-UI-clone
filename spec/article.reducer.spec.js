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
      expect(newState.article).to.be.an('object');
      expect(newState.article).to.eql({ title: 'test article' });
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
});
