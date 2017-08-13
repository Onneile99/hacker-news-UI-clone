import { expect } from 'chai';
import { reducer, initialState } from '../src/reducer/reducer';
import * as actions from '../src/actions/actions';

describe('REDUCER', () => {
    it('is a function', () => {
        expect(reducer).to.be.a('function');
    });
    describe('fetchArticles', () => {
        it('adds a list of articles to the new state', () => {
            const action = actions.fetchArticleSuccess({
                    articles: [
                        { '2': 2 },
                        { '1': 1 }
                    ]
                });
            const newState = reducer(initialState, action);
            expect(newState.articles).to.be.an('array');
            expect(newState.articles).to.eql([
                {
                    articles: [
                        { '2': 2 },
                        { '1': 1 }
                    ]
                }
            ]);
        });
        it('changes the loading property in the new state', (done) => {
            const action = actions.fetchArticles();
            const newState = reducer(initialState, action);
            done();
            expect(newState.loading).to.be.true;
        });
        it('returns the error if it fails', () => {
            const action = actions.fetchArticleFailed('error');
            expect(reducer(initialState, action)).to.eql('error');
        });
    });
});