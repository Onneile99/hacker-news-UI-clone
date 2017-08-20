import { expect } from 'chai';
import reducer from '../src/reducer/articles.reducer';
import {initialState} from '../src/reducer/articles.reducer';
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
            expect(newState.data.articles).to.be.an('array');
            expect(newState.data).to.eql(
                {
                    articles: [
                        { '2': 2 },
                        { '1': 1 }
                    ]
                }
            );
        });
        it('changes the loading property in the new state', (done) => {
            const action = actions.fetchArticles();
            const newState = reducer(initialState, action);
            done();
            expect(newState.loading).to.be.true;
        });
        it('returns the error if it fails', () => {
            const action = actions.fetchArticleFailed('error');
            const newState = reducer(initialState, action);
            expect(newState.error).to.eql('error');
        });
    });
});