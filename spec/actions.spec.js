import { expect } from 'chai';

import nock from 'nock';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import * as actions from '../src/actions/actions';
import * as types from '../src/actions/types';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

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
    beforeEach(() => {
      nock.disableNetConnect();
    });

    afterEach(() => {
      nock.cleanAll();
      nock.enableNetConnect();
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
      return store.dispatch(actions.fetchArticles()).then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
    });
  });

  describe('fetchArticleByIdRequest', () => {
    it('returns \'FETCH ARTICLE BY ID REQUEST\'', () => {
      expect(actions.fetchArticleByIdRequest()).to.eql({
        type: 'FETCH ARTICLE BY ID REQUEST'
      });
    });
  });
  describe('fetchArticleByIdSuccess', () => {
    it('returns \'FETCH ARTICLE BY ID SUCCESS\' and payload', () => {
      const input = {
        article: 'I am an article!'
      };
      expect(actions.fetchArticleByIdSuccess(input)).to.eql({
        type: 'FETCH ARTICLE BY ID SUCCESS',
        payload: input
      });
    });
  });
  describe('fetchArticleByIdFailed ', () => {
    it('returns \'FETCH ARTICLE BY ID FAILED\' and payload', () => {
      const err = {
        err: 'I am an error!'
      };
      expect(actions.fetchArticleByIdFailed(err)).to.eql({
        type: 'FETCH ARTICLE BY ID FAILED',
        payload: err
      });
    });
  });

  describe('fetchArticleById ASYNC', () => {
    beforeEach(() => {
      nock.disableNetConnect();
    });

    afterEach(() => {
      nock.cleanAll();
      nock.enableNetConnect();
    });
    it('returns correct series of actions and payload if succesful', () => {
      const testId = '594b9910c8f51a1e1b7f4243';
      nock('http://localhost:3000/api')
        .get(`/articles/${testId}`)
        .reply(200, {
          article: { title: 'test' }
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
        expect(store.getActions()).to.eql(expectedActions);
      });
    });
  });
  describe('alterArticleVotesRequest', () => {
    it('returns \'ALTER ARTICLE VOTES REQUEST\'', () => {
      expect(actions.alterArticleVotesRequest()).to.eql({
        type: 'ALTER ARTICLE VOTES REQUEST'
      });
    });
  });
  describe('alterArticleVotesSuccess', () => {
    it('returns \'ALTER ARTICLE VOTES SUCCESS\' and payload', () => {
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
      expect(actions.alterArticleVotesSuccess(input)).to.eql({
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
    it('returns \'ALTER ARTICLE VOTES FAILED\' and payload', () => {
      const err = {
        err: 'I am an error!'
      };
      expect(actions.alterArticleVotesFailed(err)).to.eql({
        type: 'ALTER ARTICLE VOTES FAILED',
        payload: err
      });
    });
  });
  describe('alterArticleVotes ASYNC', () => {
    beforeEach(() => {
      nock.disableNetConnect();
    });

    afterEach(() => {
      nock.cleanAll();
      nock.enableNetConnect();
    });
    it('returns correct series of actions and payload if succesful', () => {
      const articleId = '59b2b9e284e9e2b98319eb8a';
      const vote = 'up';
      nock('http://localhost:3000/api')
        .put(`/articles/${articleId}?vote=${vote}`, {})
        .reply(200, {
          article: { body: 'test' }
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
    beforeEach(() => {
      nock.disableNetConnect();
    });

    afterEach(() => {
      nock.cleanAll();
      nock.enableNetConnect();
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
      return store.dispatch(actions.fetchTopics()).then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
    });
  });
  describe('fetchTopicArticlesRequest', () => {
    it('returns \'FETCH TOPIC ARTICLES REQUEST\'', () => {
      expect(actions.fetchTopicArticlesRequest()).to.eql({
        type: 'FETCH TOPIC ARTICLES REQUEST'
      });
    });
  });
  describe('fetchTopicArticlesSuccess', () => {
    it('returns \'FETCH TOPIC ARTICLES SUCCESS\' and payload', () => {
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
      expect(actions.fetchTopicArticlesSuccess(input)).to.eql({
        type: 'FETCH TOPIC ARTICLES SUCCESS',
        payload: input
      });
    });
  });
  describe('fetchTopicArticlesFailed', () => {
    it('returns \'FETCH TOPIC ARTICLES FAILED\' and payload', () => {
      const err = {
        err: 'I am an error!'
      };
      expect(actions.fetchTopicArticlesFailed(err)).to.eql({
        type: 'FETCH TOPIC ARTICLES FAILED',
        payload: err
      });
    });
  });
  describe('fetchTopicArticles ASYNC', () => {
    beforeEach(() => {
      nock.disableNetConnect();
    });

    afterEach(() => {
      nock.cleanAll();
      nock.enableNetConnect();
    });
    it('returns correct series of actions and payload if succesful', () => {
      const topicId = 'football';
      nock('http://localhost:3000/api')
        .get(`/topics/${topicId}/articles`)
        .reply(200, {
          articles: ['football stuff']
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
        expect(store.getActions()).to.eql(expectedActions);
      });
    });
  });
});

describe('COMMENTS ACTIONS', () => {
  describe('fetchCommentsRequest', () => {
    it('returns \'FETCH COMMENTS REQUEST\'', () => {
      expect(actions.fetchCommentsRequest()).to.eql({
        type: 'FETCH COMMENTS REQUEST'
      });
    });
  });
  describe('fetchCommentsSuccess', () => {
    it('returns \'FETCH COMMENTS SUCCESS\' and payload', () => {
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
      expect(actions.fetchCommentsSuccess(input)).to.eql({
        type: 'FETCH COMMENTS SUCCESS',
        payload: input
      });
    });
  });
  describe('fetchCommentsFailed', () => {
    it('returns \'FETCH COMMENTS FAILED\' and payload', () => {
      const err = {
        err: 'I am an error!'
      };
      expect(actions.fetchCommentsFailed(err)).to.eql({
        type: 'FETCH COMMENTS FAILED',
        payload: err
      });
    });
  });
  describe('fetchComments ASYNC', () => {
    beforeEach(() => {
      nock.disableNetConnect();
    });

    afterEach(() => {
      nock.cleanAll();
      nock.enableNetConnect();
    });
    it('returns correct series of actions and payload if succesful', () => {
      const articleId = '594b9910c8f51a1e1b7f4243';
      nock('http://localhost:3000/api')
        .get(`/articles/${articleId}/comments`)
        .reply(200, {
          comments: ['a bunch of comments']
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
        expect(store.getActions()).to.eql(expectedActions);
      });
    });
  });
  describe('alterCommentVotesRequest', () => {
    it('returns \'ALTER COMMENT VOTES REQUEST\'', () => {
      expect(actions.alterCommentVotesRequest()).to.eql({
        type: 'ALTER COMMENT VOTES REQUEST'
      });
    });
  });
  describe('alterCommentVotesSuccess', () => {
    it('returns \'ALTER COMMENT VOTES SUCCESS\' and payload', () => {
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
      expect(actions.alterCommentVotesSuccess(input)).to.eql({
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
    it('returns \'ALTER COMMENT VOTES FAILED\' and payload', () => {
      const err = {
        err: 'I am an error!'
      };
      expect(actions.alterCommentVotesFailed(err)).to.eql({
        type: 'ALTER COMMENT VOTES FAILED',
        payload: err
      });
    });
  });
  describe('alterCommentVotes ASYNC', () => {
    beforeEach(() => {
      nock.disableNetConnect();
    });

    afterEach(() => {
      nock.cleanAll();
      nock.enableNetConnect();
    });
    it('returns correct series of actions and payload if succesful', () => {
      const commentId = '594b9910c8f51a1e1b7f4268';
      const vote = 'up';
      nock('http://localhost:3000/api')
        .put(`/comments/${commentId}?vote=${vote}`, {})
        .reply(200, {
          comment: { body: 'test' }
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
          expect(store.getActions()).to.eql(expectedActions);
        });
    });
  });
  describe('addCommentRequest', () => {
    it('returns \'ADD COMMENT REQUEST\'', () => {
      expect(actions.addCommentRequest()).to.eql({
        type: 'ADD COMMENT REQUEST'
      });
    });
  });
  describe('addCommentSuccess', () => {
    it('returns \'ADD COMMENT SUCCESS\' and payload', () => {
      const input = {
        comment: {
          _id: '594b990fc8f51a1e1b7f4240',
          body: 'Football',
          belongs_to: '594b9910c8f51a1e1b7f4243',
          created_by: 'tickle122',
          votes: 4
        }
      };
      expect(actions.addCommentSuccess(input)).to.eql({
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
    it('returns \'ADD COMMENT FAILED\' and payload', () => {
      const err = {
        err: 'I am an error!'
      };
      expect(actions.addCommentFailed(err)).to.eql({
        type: 'ADD COMMENT FAILED',
        payload: err
      });
    });
  });
  describe('addComment ASYNC', () => {
    beforeEach(() => {
      nock.disableNetConnect();
    });

    afterEach(() => {
      nock.cleanAll();
      nock.enableNetConnect();
    });
    it('returns correct series of actions and payload if succesful', () => {
      const articleId = '59b2b9e284e9e2b98319eb8a';
      const input = { body: 'test', _id: '1' };
      nock('http://localhost:3000/api')
        .post(`/articles/${articleId}/comments`, input)
        .reply(200, {
          newComment: { body: 'test', _id: '1' }
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
        expect(store.getActions()).to.eql(expectedActions);
      });
    });
  });
  describe('deleteCommentRequest', () => {
    it('returns \'DELETE COMMENT REQUEST\'', () => {
      expect(actions.deleteCommentRequest()).to.eql({
        type: 'DELETE COMMENT REQUEST'
      });
    });
  });
  describe('deleteCommentSuccess', () => {
    it('returns \'DELETE COMMENT SUCCESS\' and payload', () => {
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
      expect(actions.deleteCommentSuccess(input)).to.eql({
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
    it('returns \'DELETE COMMENT FAILED\' and payload', () => {
      const err = {
        err: 'I am an error!'
      };
      expect(actions.deleteCommentFailed(err)).to.eql({
        type: 'DELETE COMMENT FAILED',
        payload: err
      });
    });
  });
  describe('deleteComment ASYNC', () => {
    beforeEach(() => {
      nock.disableNetConnect();
    });

    afterEach(() => {
      nock.cleanAll();
      nock.enableNetConnect();
    });
    it('returns correct series of actions and payload if succesful', () => {
      const commentId = '59b2b9e284e9e2b98319ebae';
      nock('http://localhost:3000/api')
        .delete(`/comments/${commentId}`)
        .reply(200, {
          message:
            'The comment with id: 59b2b9e284e9e2b98319ebae has been removed',
          deletedComment: {
            _id: '59b2b9e284e9e2b98319ebae',
            body:
              'Jobojo gaidu govahla zuizvap vefkarsi ollovew pe vife rieri iggeffe fiez za nu ofmiw ib. Newhu zegaco irooje te fas iwu uhuemos hesuvak finem cadew noaja ja efdi wowvohcid abi baet movohepo. Sephe ezu ewamuf sa ketja towis to zujmohad zobwecos umbe deifukol vodu gumez eni duur adliet gadto zobu. Jap bevaav fu tesnu beilak hosuroz tesas dul hac toljuj tu midod waskitu.',
            belongs_to: '59b2b9e284e9e2b98319eb8a',
            __v: 0,
            created_by: 'cooljmessy',
            votes: 35,
            created_at: 1504749798000
          }
        });

      const store = mockStore({
        comments: [
          {
            _id: '59b2b9e284e9e2b98319ebae',
            body:
              'Jobojo gaidu govahla zuizvap vefkarsi ollovew pe vife rieri iggeffe fiez za nu ofmiw ib. Newhu zegaco irooje te fas iwu uhuemos hesuvak finem cadew noaja ja efdi wowvohcid abi baet movohepo. Sephe ezu ewamuf sa ketja towis to zujmohad zobwecos umbe deifukol vodu gumez eni duur adliet gadto zobu. Jap bevaav fu tesnu beilak hosuroz tesas dul hac toljuj tu midod waskitu.',
            belongs_to: '59b2b9e284e9e2b98319eb8a',
            __v: 0,
            created_by: 'cooljmessy',
            votes: 35,
            created_at: 1504749798000
          }
        ]
      });

      const expectedActions = [
        { type: types.DELETE_COMMENT_REQUEST },
        {
          type: types.DELETE_COMMENT_SUCCESS,
          payload: {
            message:
              'The comment with id: 59b2b9e284e9e2b98319ebae has been removed',
            deletedComment: {
              _id: '59b2b9e284e9e2b98319ebae',
              body:
                'Jobojo gaidu govahla zuizvap vefkarsi ollovew pe vife rieri iggeffe fiez za nu ofmiw ib. Newhu zegaco irooje te fas iwu uhuemos hesuvak finem cadew noaja ja efdi wowvohcid abi baet movohepo. Sephe ezu ewamuf sa ketja towis to zujmohad zobwecos umbe deifukol vodu gumez eni duur adliet gadto zobu. Jap bevaav fu tesnu beilak hosuroz tesas dul hac toljuj tu midod waskitu.',
              belongs_to: '59b2b9e284e9e2b98319eb8a',
              __v: 0,
              created_by: 'cooljmessy',
              votes: 35,
              created_at: 1504749798000
            }
          }
        }
      ];
      return store.dispatch(actions.deleteComment(commentId)).then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
    });
  });
});
