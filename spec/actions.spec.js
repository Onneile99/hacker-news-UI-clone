import { expect } from 'chai';

import nock from 'nock';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import * as actions from '../src/actions/actions';
import * as types from '../src/actions/types';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('ACTIONS', () => {
    describe('ARTICLES ACTIONS', () => {
        describe('fetchArticlesRequest', () => {
            it('returns \'FETCH ARTICLES REQUEST\'', () => {
                expect(actions.fetchArticlesRequest()).to.eql({
                    type: 'FETCH ARTICLES REQUEST'
                });
            });
        });
        describe('fetchArticlesSuccess', () => {
            it('returns \'FETCH ARTICLES SUCCESS\' and payload', () => {
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
            it('returns \'FETCH ARTICLES FAILED\' and payload', () => {
                const err = {
                    err: 'I am an error!'
                };
                expect(actions.fetchArticlesFailed(err)).to.eql({
                    type: 'FETCH ARTICLES FAILED',
                    payload: err
                });
            });
        });

        describe('fetchArticles ASYNC', () => {
            afterEach(() => {
                nock.cleanAll();
            });
            it('returns correct series of actions and payload if succesful', () => {
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
            it('returns \'FETCH TOPICS REQUEST\'', () => {
                expect(actions.fetchTopicsRequest()).to.eql({
                    type: 'FETCH TOPICS REQUEST'
                });
            });
        });
        describe('fetchTopicsSuccess', () => {
            it('returns \'FETCH TOPICS SUCCESS\' and payload', () => {
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
        describe('fetchTopicsFailed', () => {
            it('returns \'FETCH TOPICS FAILED\' and payload', () => {
                const err = {
                    err: 'I am an error!'
                };
                expect(actions.fetchTopicsFailed(err)).to.eql({
                    type: 'FETCH TOPICS FAILED',
                    payload: err
                });
            });
        });
        describe('fetchTopics ASYNC', () => {
            afterEach(() => {
                nock.cleanAll();
            });
            it('returns correct series of actions and payload if succesful', () => {
                nock('http://localhost:3000/api')
                    .get('/topics')
                    .reply(200, {
                        topics: ['do something']
                    });

                const store = mockStore({
                    topics: []
                });

                const expectedActions = [
                    { type: types.FETCH_TOPICS_REQUEST },
                    {
                        type: types.FETCH_TOPICS_SUCCESS,
                        payload: ['do something']
                    }
                ];
                return store.dispatch(actions.fetchTopics())
                    .then(() => {
                        expect(store.getActions()).to.eql(expectedActions);
                    });
            });
        });
    }); 
});