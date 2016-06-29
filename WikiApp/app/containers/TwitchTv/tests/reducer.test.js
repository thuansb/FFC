import expect from 'expect';
import twitchTvReducer from '../reducer';

describe('twitchTvReducer', () => {
  it('returns the initial state', () => {
    expect(twitchTvReducer(undefined, {})).toEqual({});
  });
});
