import reducer from './topics.reducer';
import {initialState} from './topics.reducer';
import * as actions from '../actions/actions';

describe('TOPICS REDUCER', () => {
    test('is a function', () => {
        expect(typeof reducer).toBe('function');
    });
    describe('fetchTopics', () => {
        test('adds a list of topics to the new state', () => {
            const action = actions.fetchTopicsSuccess({
                    topics: [{ '2': 2 },{ '1': 1 }]
                });
            const newState = reducer(initialState, action);
            expect(Array.isArray(newState.data.topics)).toBe(true);
            expect(newState.data).toEqual({
                topics: [
                    { '2': 2 },
                    { '1': 1 }
                ]
            });
        });
        test('changes the loading property in the new state', (done) => {
            const action = actions.fetchTopicsRequest();
            const newState = reducer(initialState, action);
            done();
            expect(newState.loading).toBe(true);
        });
        test('returns the error if it fails', () => {
            const action = actions.fetchTopicsFailed('error');
            const newState = reducer(initialState, action);
            expect(newState.error).toEqual('error');
        });
    });
});