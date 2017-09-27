import { expect } from 'chai';
import reducer from '../src/reducers/comments.reducer';
import { initialState } from '../src/reducers/comments.reducer';
import * as actions from '../src/actions/actions';

describe('COMMENTS REDUCER', () => {
  it('is a function', () => {
    expect(reducer).to.be.a('function');
  });
  describe('fetchComments', () => {
    it('adds a list of comments to the new state', () => {
      const action = actions.fetchCommentsSuccess({
        comments: [{ '2': 2 }, { '1': 1 }]
      });
      const newState = reducer(initialState, action);
      expect(newState.data.comments).to.be.an('array');
      expect(newState.data).to.eql({
        comments: [{ '2': 2 }, { '1': 1 }]
      });
    });
    it('changes the loading property in the new state', done => {
      const action = actions.fetchComments();
      const newState = reducer(initialState, action);
      done();
      expect(newState.loading).to.be.true;
    });
    it('returns the error if it fails', () => {
      const action = actions.fetchCommentsFailed('error');
      const newState = reducer(initialState, action);
      expect(newState.error).to.eql('error');
    });
  });
  describe('alterCommentVotes', () => {
    it('alters comment votes, and add the selected comment to state', () => {
      const payload = { _id: 1, votes: 1 };
      const action = actions.alterCommentVotesSuccess(payload);
      const prevState = {
        data: [{ _id: 1, votes: 0 }, { _id: 2, votes: 3 }],
        comment: null,
        error: null,
        loading: false
      };
      const newState = reducer(prevState, action);
      expect(newState.data).to.be.an('array');
      expect(newState.data.length).to.equal(2);
      expect(newState.data).to.eql([
        { _id: 1, votes: 1 },
        { _id: 2, votes: 3 }
      ]);
    });
    it('changes the loading property in the new state', done => {
      const action = actions.alterCommentVotesRequest();
      const newState = reducer(initialState, action);
      done();
      expect(newState.loading).to.be.true;
    });
    it('returns the error if it fails', () => {
      const action = actions.alterCommentVotesFailed('error');
      const newState = reducer(initialState, action);
      expect(newState.error).to.eql('error');
    });
  });

  describe('addComment', () => {
    it('posts comment, and adds the new comment to state', () => {
      const payload = { newComment: {_id: 3, body: 'three\'s a crowd' }};
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
      expect(newState.data).to.be.an('array');
      expect(newState.data.length).to.equal(3);
      expect(newState.data).to.eql([
        { _id: 1, body: 'Numero uno, yeah!' },
        { _id: 2, body: 'I am number dos' },
        { _id: 3, body: 'three\'s a crowd' }
      ]);
    });
    it('changes the loading property in the new state', done => {
      const action = actions.addCommentRequest();
      const newState = reducer(initialState, action);
      done();
      expect(newState.loading).to.be.true;
    });
    it('returns the error if it fails', () => {
      const action = actions.addCommentFailed('error');
      const newState = reducer(initialState, action);
      expect(newState.error).to.eql('error');
    });
  });
});
