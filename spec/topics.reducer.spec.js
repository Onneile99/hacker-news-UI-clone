import { expect } from 'chai';
import reducer from '../src/reducers/topics.reducer';
import {initialState} from '../src/reducers/topics.reducer';
import * as actions from '../src/actions/actions';

describe('TOPICS REDUCER', () => {
    it('is a function', () => {
        expect(reducer).to.be.a('function');
    });
    describe('fetchTopics', () => {
        it('adds a list of topics to the new state', () => {
            const action = actions.fetchTopicsSuccess({
                    topics: [
                        { '2': 2 },
                        { '1': 1 }
                    ]
                });
            const newState = reducer(initialState, action);
            expect(newState.data.topics).to.be.an('array');
            expect(newState.data).to.eql(
                {
                    topics: [
                        { '2': 2 },
                        { '1': 1 }
                    ]
                }
            );
        });
        it('changes the loading property in the new state', (done) => {
            const action = actions.fetchTopics();
            const newState = reducer(initialState, action);
            done();
            expect(newState.loading).to.be.true;
        });
        it('returns the error if it fails', () => {
            const action = actions.fetchTopicsFailed('error');
            const newState = reducer(initialState, action);
            expect(newState.error).to.eql('error');
        });
    });
});