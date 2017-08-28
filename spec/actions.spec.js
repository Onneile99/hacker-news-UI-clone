import { expect } from 'chai';

import nock from 'nock';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import * as actions from '../src/actions/actions';
import * as types from '../src/actions/types';

describe('ACTIONS', () => {
    describe('ARTICLES ACTIONS', () => {
        describe('fetchArticlesRequest', () => {
            it('returns the expected action', () => {
                expect(actions.fetchArticlesRequest()).to.eql({
                    type: 'FETCH ARTICLES REQUEST'
                });
            });
        });
        describe('fetchArticlesSuccess', () => {
            it('returns the expected action', () => {
                const input = {
                    article: 'I am an article!'
                };
                expect(actions.fetchArticlesSuccess(input)).to.eql({
                    type: 'FETCH ARTICLES SUCCESS',
                    payload: input
                });
            });
        });
        describe('fetchArticlesFailed ', () => {
            it('returns the expected action', () => {
                const err = {
                    err: 'I am an error!'
                };
                expect(actions.fetchArticlesFailed(err)).to.eql({
                    type: 'FETCH ARTICLES FAILED',
                    payload: err
                });
            });
        });

    });

    const middleware = [thunk];
    const mockStore = configureMockStore(middleware);

    describe('ASYNC ARTICLES ACTIONS', () => {
        afterEach(() => {
            nock.cleanAll();
        });
        describe('fetchArticles', () => {
            it('returns FETCH_ARTICLES_SUCCESS if fetchArticles ran', () => {
                nock('http://localhost:3000/api')
                    .get('/articles')
                    .reply(200, {
                        articles: ['do something']
                    });

                const store = mockStore({
                    articles: []
                });

                const expectedActions = [
                    { type: types.FETCH_ARTICLES_REQUEST },
                    {
                        type: types.FETCH_ARTICLES_SUCCESS,
                        payload: ['do something']
                    }
                ];
                return store.dispatch(actions.fetchArticles())
                    .then(() => {
                        expect(store.getActions()).to.eql(expectedActions);
                    });
            });
        });
    });

    describe('TOPICS ACTIONS', () => {
        describe('fetchTopicsRequest', () => {
            it('returns the expected action', () => {
                expect(actions.fetchTopicsRequest()).to.eql({
                    type: 'FETCH TOPICS REQUEST'
                });
            });
        });
        describe('fetchTopicsSuccess', () => {
            it('returns the expected action', () => {
                const input = {
                    topics: [
                        {
                        _id: '594b990fc8f51a1e1b7f4240',
                        title: 'Football',
                        slug: 'football',
                        __v: 0
                        }
                    ]
                };
                expect(actions.fetchTopicsSuccess(input)).to.eql({
                    type: 'FETCH TOPICS SUCCESS',
                    payload: input
                });
            });
        });
        
    });

});