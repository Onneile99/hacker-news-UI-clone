import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';

import * as actions from './actions';
import * as types from './types';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('ARTICLES ACTIONS', () => {
  describe('fetchArticlesRequest', () => {
    test('returns \'FETCH ARTICLES REQUEST\'', () => {
      expect(actions.fetchArticlesRequest()).toEqual({
        type: 'FETCH ARTICLES REQUEST'
      });
    });
  });
  describe('fetchArticlesSuccess', () => {
    test('returns \'FETCH ARTICLES SUCCESS\' and payload', () => {
      const input = {
        article: 'I am an article!'
      };
      expect(actions.fetchArticlesSuccess(input)).toEqual({
        type: 'FETCH ARTICLES SUCCESS',
        payload: input
      });
    });
  });
  describe('fetchArticlesFailed ', () => {
    test('returns \'FETCH ARTICLES FAILED\' and payload', () => {
      const err = {
        err: 'I am an error!'
      };
      expect(actions.fetchArticlesFailed(err)).toEqual({
        type: 'FETCH ARTICLES FAILED',
        payload: err
      });
    });
  });

  describe('fetchArticles ASYNC', () => {
    beforeEach(() => {
      moxios.install();
    });

    afterEach(() => {
      moxios.uninstall;
    });
    test('returns correct series of actions and payload if succesful', () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {
            articles: ['do something']
          }
        });
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
      return store.dispatch(actions.fetchArticles()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  describe('fetchArticleByIdRequest', () => {
    test('returns \'FETCH ARTICLE BY ID REQUEST\'', () => {
      expect(actions.fetchArticleByIdRequest()).toEqual({
        type: 'FETCH ARTICLE BY ID REQUEST'
      });
    });
  });
  describe('fetchArticleByIdSuccess', () => {
    test('returns \'FETCH ARTICLE BY ID SUCCESS\' and payload', () => {
      const input = {
        article: 'I am an article!'
      };
      expect(actions.fetchArticleByIdSuccess(input)).toEqual({
        type: 'FETCH ARTICLE BY ID SUCCESS',
        payload: input
      });
    });
  });
  describe('fetchArticleByIdFailed ', () => {
    test('returns \'FETCH ARTICLE BY ID FAILED\' and payload', () => {
      const err = {
        err: 'I am an error!'
      };
      expect(actions.fetchArticleByIdFailed(err)).toEqual({
        type: 'FETCH ARTICLE BY ID FAILED',
        payload: err
      });
    });
  });

  describe('fetchArticleById ASYNC', () => {
    beforeEach(function () {
      moxios.install();
    });

    afterEach(function () {
      moxios.uninstall();
    });

    test('returns correct series of actions and payload if succesful', () => {
      const testId = '594b9910c8f51a1e1b7f4243';
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {
            article: { title: 'test' }
          }
        });
      });

      const store = mockStore({
        article: null
      });

      const expectedActions = [
        { type: types.FETCH_ARTICLE_BY_ID_REQUEST },
        {
          type: types.FETCH_ARTICLE_BY_ID_SUCCESS,
          payload: {
            article: { title: 'test' }
          }
        }
      ];
      return store.dispatch(actions.fetchArticleById(testId)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
  describe('alterArticleVotesRequest', () => {
    test('returns \'ALTER ARTICLE VOTES REQUEST\'', () => {
      expect(actions.alterArticleVotesRequest()).toEqual({
        type: 'ALTER ARTICLE VOTES REQUEST'
      });
    });
  });
  describe('alterArticleVotesSuccess', () => {
    test('returns \'ALTER ARTICLE VOTES SUCCESS\' and payload', () => {
      const input = {
        articles: [
          {
            _id: '594b990fc8f51a1e1b7f4240',
            body: 'test',
            belongs_to: '594b9910c8f51a1e1b7f4243',
            created_by: 'tickle122',
            votes: 4
          }
        ]
      };
      expect(actions.alterArticleVotesSuccess(input)).toEqual({
        type: 'ALTER ARTICLE VOTES SUCCESS',
        payload: {
          articles: [
            {
              _id: '594b990fc8f51a1e1b7f4240',
              body: 'test',
              belongs_to: '594b9910c8f51a1e1b7f4243',
              created_by: 'tickle122',
              votes: 4
            }
          ]
        }
      });
    });
  });
  describe('alterArticleVotesFailed', () => {
    test('returns \'ALTER ARTICLE VOTES FAILED\' and payload', () => {
      const err = {
        err: 'I am an error!'
      };
      expect(actions.alterArticleVotesFailed(err)).toEqual({
        type: 'ALTER ARTICLE VOTES FAILED',
        payload: err
      });
    });
  });
  describe('alterArticleVotes ASYNC', () => {
    beforeEach(function () {
      moxios.install();
    });

    afterEach(function () {
      moxios.uninstall();
    });

    test('returns correct series of actions and payload if succesful', () => {
      const articleId = '59b2b9e284e9e2b98319eb8a';
      const vote = 'up';
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {
            article: { body: 'test' }
          }
        });
      });

      const store = mockStore({
        article: null
      });

      const expectedActions = [
        { type: types.ALTER_ARTICLE_VOTES_REQUEST },
        {
          type: types.ALTER_ARTICLE_VOTES_SUCCESS,
          payload: {
            article: { body: 'test' }
          }
        }
      ];
      return store
        .dispatch(actions.alterArticleVotes(articleId, vote))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });
  });
});

describe('TOPICS ACTIONS', () => {
  describe('fetchTopicsRequest', () => {
    test('returns \'FETCH TOPICS REQUEST\'', () => {
      expect(actions.fetchTopicsRequest()).toEqual({
        type: 'FETCH TOPICS REQUEST'
      });
    });
  });
  describe('fetchTopicsSuccess', () => {
    test('returns \'FETCH TOPICS SUCCESS\' and payload', () => {
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
      expect(actions.fetchTopicsSuccess(input)).toEqual({
        type: 'FETCH TOPICS SUCCESS',
        payload: input
      });
    });
  });
  describe('fetchTopicsFailed', () => {
    test('returns \'FETCH TOPICS FAILED\' and payload', () => {
      const err = {
        err: 'I am an error!'
      };
      expect(actions.fetchTopicsFailed(err)).toEqual({
        type: 'FETCH TOPICS FAILED',
        payload: err
      });
    });
  });
  describe('fetchTopics ASYNC', () => {
    beforeEach(function () {
      moxios.install();
    });

    afterEach(function () {
      moxios.uninstall();
    });
    test('returns correct series of actions and payload if succesful', () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {
            topics: ['do something']
          }
        });
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
      return store.dispatch(actions.fetchTopics()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
  describe('fetchTopicArticlesRequest', () => {
    test('returns \'FETCH TOPIC ARTICLES REQUEST\'', () => {
      expect(actions.fetchTopicArticlesRequest()).toEqual({
        type: 'FETCH TOPIC ARTICLES REQUEST'
      });
    });
  });
  describe('fetchTopicArticlesSuccess', () => {
    test('returns \'FETCH TOPIC ARTICLES SUCCESS\' and payload', () => {
      const input = {
        articles: [
          {
            _id: '594b990fc8f51a1e1b7f4240',
            title: 'Football',
            slug: 'football',
            __v: 0
          }
        ]
      };
      expect(actions.fetchTopicArticlesSuccess(input)).toEqual({
        type: 'FETCH TOPIC ARTICLES SUCCESS',
        payload: input
      });
    });
  });
  describe('fetchTopicArticlesFailed', () => {
    test('returns \'FETCH TOPIC ARTICLES FAILED\' and payload', () => {
      const err = {
        err: 'I am an error!'
      };
      expect(actions.fetchTopicArticlesFailed(err)).toEqual({
        type: 'FETCH TOPIC ARTICLES FAILED',
        payload: err
      });
    });
  });
  describe('fetchTopicArticles ASYNC', () => {
    beforeEach(function () {
      moxios.install();
    });

    afterEach(function () {
      moxios.uninstall();
    });
    test('returns correct series of actions and payload if succesful', () => {
      const topicId = 'football';
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {
            articles: ['football stuff']
          }
        });
      });
      const store = mockStore({
        articles: []
      });

      const expectedActions = [
        { type: types.FETCH_TOPIC_ARTICLES_REQUEST },
        {
          type: types.FETCH_TOPIC_ARTICLES_SUCCESS,
          payload: ['football stuff']
        }
      ];

      return store.dispatch(actions.fetchTopicArticles(topicId)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});

describe('COMMENTS ACTIONS', () => {
  describe('fetchCommentsRequest', () => {
    test('returns \'FETCH COMMENTS REQUEST\'', () => {
      expect(actions.fetchCommentsRequest()).toEqual({
        type: 'FETCH COMMENTS REQUEST'
      });
    });
  });
  describe('fetchCommentsSuccess', () => {
    test('returns \'FETCH COMMENTS SUCCESS\' and payload', () => {
      const input = {
        comments: [
          {
            _id: '594b990fc8f51a1e1b7f4240',
            body: 'Football',
            belongs_to: '594b9910c8f51a1e1b7f4243',
            created_by: 'tickle122',
            votes: 4
          }
        ]
      };
      expect(actions.fetchCommentsSuccess(input)).toEqual({
        type: 'FETCH COMMENTS SUCCESS',
        payload: input
      });
    });
  });
  describe('fetchCommentsFailed', () => {
    test('returns \'FETCH COMMENTS FAILED\' and payload', () => {
      const err = {
        err: 'I am an error!'
      };
      expect(actions.fetchCommentsFailed(err)).toEqual({
        type: 'FETCH COMMENTS FAILED',
        payload: err
      });
    });
  });
  describe('fetchComments ASYNC', () => {
    beforeEach(function () {
      moxios.install();
    });

    afterEach(function () {
      moxios.uninstall();
    });
    test('returns correct series of actions and payload if succesful', () => {
      const articleId = '594b9910c8f51a1e1b7f4243';
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {
            comments: ['a bunch of comments']
          }
        });
      });
      const store = mockStore({
        comments: []
      });

      const expectedActions = [
        { type: types.FETCH_COMMENTS_REQUEST },
        {
          type: types.FETCH_COMMENTS_SUCCESS,
          payload: ['a bunch of comments']
        }
      ];
      return store.dispatch(actions.fetchComments(articleId)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
  describe('alterCommentVotesRequest', () => {
    test('returns \'ALTER COMMENT VOTES REQUEST\'', () => {
      expect(actions.alterCommentVotesRequest()).toEqual({
        type: 'ALTER COMMENT VOTES REQUEST'
      });
    });
  });
  describe('alterCommentVotesSuccess', () => {
    test('returns \'ALTER COMMENT VOTES SUCCESS\' and payload', () => {
      const input = {
        comments: [
          {
            _id: '594b990fc8f51a1e1b7f4240',
            body: 'Football',
            belongs_to: '594b9910c8f51a1e1b7f4243',
            created_by: 'tickle122',
            votes: 4
          }
        ]
      };
      expect(actions.alterCommentVotesSuccess(input)).toEqual({
        type: 'ALTER COMMENT VOTES SUCCESS',
        payload: {
          comments: [
            {
              _id: '594b990fc8f51a1e1b7f4240',
              body: 'Football',
              belongs_to: '594b9910c8f51a1e1b7f4243',
              created_by: 'tickle122',
              votes: 4
            }
          ]
        }
      });
    });
  });
  describe('alterCommentVotesFailed', () => {
    test('returns \'ALTER COMMENT VOTES FAILED\' and payload', () => {
      const err = {
        err: 'I am an error!'
      };
      expect(actions.alterCommentVotesFailed(err)).toEqual({
        type: 'ALTER COMMENT VOTES FAILED',
        payload: err
      });
    });
  });
  describe('alterCommentVotes ASYNC', () => {
    beforeEach(function () {
      moxios.install();
    });

    afterEach(function () {
      moxios.uninstall();
    });
    test('returns correct series of actions and payload if succesful', () => {
      const commentId = '594b9910c8f51a1e1b7f4268';
      const vote = 'up';
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {
            comment: { body: 'test' }
          }
        });
      });
      const store = mockStore({
        comment: null
      });
      const expectedActions = [
        { type: types.ALTER_COMMENT_VOTES_REQUEST },
        {
          type: types.ALTER_COMMENT_VOTES_SUCCESS,
          payload: {
            comment: { body: 'test' }
          }
        }
      ];
      return store
        .dispatch(actions.alterCommentVotes(commentId, vote))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });
  });
  describe('addCommentRequest', () => {
    test('returns \'ADD COMMENT REQUEST\'', () => {
      expect(actions.addCommentRequest()).toEqual({
        type: 'ADD COMMENT REQUEST'
      });
    });
  });
  describe('addCommentSuccess', () => {
    test('returns \'ADD COMMENT SUCCESS\' and payload', () => {
      const input = {
        comment: {
          _id: '594b990fc8f51a1e1b7f4240',
          body: 'Football',
          belongs_to: '594b9910c8f51a1e1b7f4243',
          created_by: 'tickle122',
          votes: 4
        }
      };
      expect(actions.addCommentSuccess(input)).toEqual({
        type: 'ADD COMMENT SUCCESS',
        payload: {
          comment: {
            _id: '594b990fc8f51a1e1b7f4240',
            body: 'Football',
            belongs_to: '594b9910c8f51a1e1b7f4243',
            created_by: 'tickle122',
            votes: 4
          }
        }
      });
    });
  });
  describe('addCommentFailed', () => {
    test('returns \'ADD COMMENT FAILED\' and payload', () => {
      const err = {
        err: 'I am an error!'
      };
      expect(actions.addCommentFailed(err)).toEqual({
        type: 'ADD COMMENT FAILED',
        payload: err
      });
    });
  });
  describe('addComment ASYNC', () => {
    beforeEach(function () {
      moxios.install();
    });

    afterEach(function () {
      moxios.uninstall();
    });
    test('returns correct series of actions and payload if succesful', () => {
      const articleId = '59b2b9e284e9e2b98319eb8a';
      const input = { body: 'test', _id: '1' };
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {
            newComment: { body: 'test', _id: '1' }
          }
        });
      });
      const store = mockStore({
        newComment: null
      });

      const expectedActions = [
        { type: types.ADD_COMMENT_REQUEST },
        {
          type: types.ADD_COMMENT_SUCCESS,
          payload: {
            newComment: { body: 'test', _id: '1' }
          }
        }
      ];
      return store.dispatch(actions.addComment(articleId, input)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
  describe('deleteCommentRequest', () => {
    test('returns \'DELETE COMMENT REQUEST\'', () => {
      expect(actions.deleteCommentRequest()).toEqual({
        type: 'DELETE COMMENT REQUEST'
      });
    });
  });
  describe('deleteCommentSuccess', () => {
    test('returns \'DELETE COMMENT SUCCESS\' and payload', () => {
      const input = {
        message: 'sucess',
        deletedComment: {
          _id: '594b990fc8f51a1e1b7f4240',
          body: 'Football',
          belongs_to: '594b9910c8f51a1e1b7f4243',
          created_by: 'tickle122',
          votes: 4
        }
      };
      expect(actions.deleteCommentSuccess(input)).toEqual({
        type: 'DELETE COMMENT SUCCESS',
        payload: {
          message: 'sucess',
          deletedComment: {
            _id: '594b990fc8f51a1e1b7f4240',
            body: 'Football',
            belongs_to: '594b9910c8f51a1e1b7f4243',
            created_by: 'tickle122',
            votes: 4
          }
        }
      });
    });
  });
  describe('deleteCommentFailed', () => {
    test('returns \'DELETE COMMENT FAILED\' and payload', () => {
      const err = {
        err: 'I am an error!'
      };
      expect(actions.deleteCommentFailed(err)).toEqual({
        type: 'DELETE COMMENT FAILED',
        payload: err
      });
    });
  });
  describe('deleteComment ASYNC', () => {
    beforeEach(function () {
      moxios.install();
    });

    afterEach(function () {
      moxios.uninstall();
    });
    test('returns correct series of actions and payload if succesful', () => {
      const commentId = '59cd27639f8522f393caaa11';
      const user = 'northcoder';
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {
            message:
              'The comment with id: 59cd27639f8522f393caaa11 has been removed',
            deletedComment: {
              _id: '59cd27639f8522f393caaa11',
              belongs_to: '59b2b9e284e9e2b98319eb8a',
              body: 'testjhfjghdjgfjhdjfhgj\n',
              __v: 0,
              created_by: 'northcoder',
              votes: 0,
              created_at: 1506616933566
            }
          }
        });
      });

      const store = mockStore({
        comments: [
          {
            _id: '59cd27639f8522f393caaa11',
            belongs_to: '59b2b9e284e9e2b98319eb8a',
            body: 'testjhfjghdjgfjhdjfhgj\n',
            __v: 0,
            created_by: 'northcoder',
            votes: 0,
            created_at: 1506616933566
          }
        ]
      });

      const expectedActions = [
        { type: types.DELETE_COMMENT_REQUEST },
        {
          type: types.DELETE_COMMENT_SUCCESS,
          payload: {
            message:
              'The comment with id: 59cd27639f8522f393caaa11 has been removed',
            deletedComment: {
              _id: '59cd27639f8522f393caaa11',
              belongs_to: '59b2b9e284e9e2b98319eb8a',
              body: 'testjhfjghdjgfjhdjfhgj\n',
              __v: 0,
              created_by: 'northcoder',
              votes: 0,
              created_at: 1506616933566
            }
          }
        }
      ];
      return store.dispatch(actions.deleteComment(commentId, user)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
