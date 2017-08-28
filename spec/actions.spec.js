import { expect } from 'chai';

import nock from 'nock';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import * as actions from '../src/actions/actions';
import * as types from '../src/actions/types';

describe('ACTIONS', () => {
    describe('ARTICLE ACTIONS', () => {
        describe('fetchArticleRequest', () => {
            it('returns the expected action', () => {
                expect(actions.fetchArticleRequest()).to.eql({
                    type: 'FETCH ARTICLE REQUEST'
                });
            });
        });
        describe('fetchArticleSuccess', () => {
            it('returns the expected action', () => {
                const input = {
                    article: 'I am an article!'
                };
                expect(actions.fetchArticleSuccess(input)).to.eql({
                    type: 'FETCH ARTICLE SUCCESS',
                    payload: input
                });
            });
        });
        describe('fetchArticleFailed ', () => {
            it('returns the expected action', () => {
                const err = {
                    err: 'I am an error!'
                };
                expect(actions.fetchArticleFailed(err)).to.eql({
                    type: 'FETCH ARTICLE FAILED',
                    payload: err
                });
            });
        });

    });

    const middleware = [thunk];
    const mockStore = configureMockStore(middleware);

    describe('ASYNC ARTICLE ACTIONS', () => {
        afterEach(() => {
            nock.cleanAll();
        });
        describe('fetchArticles', () => {
            it('returns FETCH_ARTICLE_SUCCESS if fetchingArticles has been done', () => {
                nock('http://localhost:3000/api')
                    .get('/articles')
                    .reply(200, {
                        articles: ['do something']
                    });

                const store = mockStore({
                    articles: []
                });

                const expectedActions = [
                    { type: types.FETCH_ARTICLE_REQUEST },
                    {
                        type: types.FETCH_ARTICLE_SUCCESS,
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