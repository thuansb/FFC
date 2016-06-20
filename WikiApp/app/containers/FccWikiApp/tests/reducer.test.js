import expect from 'expect';
import fccWikiAppReducer from '../reducer';

describe('fccWikiAppReducer', () => {
  it('returns the initial state', () => {
    expect(fccWikiAppReducer(undefined, {})).toEqual({});
  });
});
