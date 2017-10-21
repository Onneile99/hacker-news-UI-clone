import reducer from './comments.reducer';
import { initialState } from './comments.reducer';
import * as actions from '../actions/actions';

describe('COMMENTS REDUCER', () => {
  test('is a function', () => {
    expect(typeof reducer).toBe('function');
  });
  describe('fetchComments', () => {
    test('adds a list of comments to the new state', () => {
      const action = actions.fetchCommentsSuccess({
        comments: [{ '2': 2 }, { '1': 1 }]
      });
      const newState = reducer(initialState, action);
      expect(Array.isArray(newState.data.comments)).toBe(true);
      expect(newState.data).toEqual({
        comments: [{ '2': 2 }, { '1': 1 }]
      });
    });
    test('changes the loading property in the new state', done => {
      const action = actions.fetchCommentsRequest();
      const newState = reducer(initialState, action);
      done();
      expect(newState.loading).toBe(true);
    });
    test('returns the error if it fails', () => {
      const action = actions.fetchCommentsFailed('error');
      const newState = reducer(initialState, action);
      expect(newState.error).toEqual('error');
    });
  });
  describe('alterCommentVotes', () => {
    test('alters comment votes, and add the selected comment to state', () => {
      const payload = { _id: 1, votes: 1 };
      const action = actions.alterCommentVotesSuccess(payload);
      const prevState = {
        data: [{ _id: 1, votes: 0 }, { _id: 2, votes: 3 }],
        comment: null,
        error: null,
        loading: false
      };
      const newState = reducer(prevState, action);
      expect(Array.isArray(newState.data)).toBe(true);
      expect(newState.data.length).toBe(2);
      expect(newState.data).toEqual([
        { _id: 1, votes: 1 },
        { _id: 2, votes: 3 }
      ]);
    });
    test('changes the loading property in the new state', done => {
      const action = actions.alterCommentVotesRequest();
      const newState = reducer(initialState, action);
      done();
      expect(newState.loading).toBe(true);
    });
    test('returns the error if it fails', () => {
      const action = actions.alterCommentVotesFailed('error');
      const newState = reducer(initialState, action);
      expect(newState.error).toEqual('error');
    });
  });

  describe('addComment', () => {
    test('posts comment, and adds the new comment to state', () => {
      const payload = { newComment: { _id: 3, body: 'three\'s a crowd' } };
      const action = actions.addCommentSuccess(payload);
      const prevState = {
        data: [
          { _id: 1, body: 'Numero uno, yeah!' },
          { _id: 2, body: 'I am number dos' }
        ],
        error: null,
        loading: false
      };
      const newState = reducer(prevState, action);
      expect(Array.isArray(newState.data)).toBe(true);
      expect(newState.data.length).toBe(3);
      expect(newState.data).toEqual([
        { _id: 1, body: 'Numero uno, yeah!' },
        { _id: 2, body: 'I am number dos' },
        { _id: 3, body: 'three\'s a crowd' }
      ]);
    });
    test('changes the loading property in the new state', done => {
      const action = actions.addCommentRequest();
      const newState = reducer(initialState, action);
      done();
      expect(newState.loading).toBe(true);
    });
    test('returns the error if it fails', () => {
      const action = actions.addCommentFailed('error');
      const newState = reducer(initialState, action);
      expect(newState.error).toEqual('error');
    });
  });
  describe('deleteComment', () => {
    test('delete comment, and remove comment to state', () => {
      const payload = {
        message:
          'The comment with id: 2 has been removed',
        deletedComment: { _id: 2, body: 'I am number dos' }
      };
      const action = actions.deleteCommentSuccess(payload);
      const prevState = {
        data: [
          { _id: 1, body: 'Numero uno, yeah!' },
          { _id: 2, body: 'I am number dos' }
        ],
        error: null,
        loading: false
      };
      const newState = reducer(prevState, action);
      expect(Array.isArray(newState.data)).toBe(true);
      expect(newState.data.length).toBe(1);
      expect(newState.data).toEqual([
        { _id: 1, body: 'Numero uno, yeah!' }
      ]);
    });
    test('changes the loading property in the new state', done => {
      const action = actions.deleteCommentRequest();
      const newState = reducer(initialState, action);
      done();
      expect(newState.loading).toBe(true);
    });
    test('returns the error if it fails', () => {
      const action = actions.deleteCommentFailed('error');
      const newState = reducer(initialState, action);
      expect(newState.error).toEqual('error');
    });
  });
});
