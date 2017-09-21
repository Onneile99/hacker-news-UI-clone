import { expect } from 'chai';
import reducer from '../src/reducers/comments.reducer';
import {initialState} from '../src/reducers/comments.reducer';
import * as actions from '../src/actions/actions';

describe('COMMENTS REDUCER', () => {
    it('is a function', () => {
        expect(reducer).to.be.a('function');
    });
    describe('fetchComments', () => {
        it('adds a list of comments to the new state', () => {
            const action = actions.fetchCommentsSuccess({
                    comments: [
                        { '2': 2 },
                        { '1': 1 }
                    ]
                });
            const newState = reducer(initialState, action);
            expect(newState.data.comments).to.be.an('array');
            expect(newState.data).to.eql(
                {
                    comments: [
                        { '2': 2 },
                        { '1': 1 }
                    ]
                }
            );
        });
        it('changes the loading property in the new state', (done) => {
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
});