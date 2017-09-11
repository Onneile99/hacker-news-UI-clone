import { expect } from 'chai';
import reducer from '../src/reducers/articles.reducer';
import {initialState} from '../src/reducers/articles.reducer';
import * as actions from '../src/actions/actions';

describe('ARTICLES REDUCER', () => {
    it('is a function', () => {
        expect(reducer).to.be.a('function');
    });
    describe('fetchArticles', () => {
        it('adds a list of articles to the new state', () => {
            const action = actions.fetchArticlesSuccess({
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
});