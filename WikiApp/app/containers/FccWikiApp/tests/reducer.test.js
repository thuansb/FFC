import expect from 'expect';
import fccwikiAppReducer from '../reducer';

describe('fccwikiAppReducer', () => {
  it('returns the initial state', () => {
    expect(fccwikiAppReducer(undefined, {})).toEqual({});
  });
});
