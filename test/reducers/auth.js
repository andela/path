import { expect } from 'chai';
import auth from 'reducers/auth';
import * as userActions from 'actions/users';

describe('auth reducer', () => {
  it('returns the default state', () => {
    const newState = {
      token: null,
      userId: null
    };
    expect(auth(undefined, {})).to.deep.equal(newState);
  });

  it('handles CURRENT_USER_RECIEVE', () => {
    const oldState = {
      token: 'gGKhkhafhkhJGGJjghdsafghj',
      userId: null
    };
    const action = {
      type: userActions.CURRENT_USER_RECIEVE,
      userId: 'AHHmvczsdfhJHJHGbjhHJkJJG',
    };
    const newState = {
      token: 'gGKhkhafhkhJGGJjghdsafghj',
      userId: 'AHHmvczsdfhJHJHGbjhHJkJJG'
    };
    expect(auth(oldState, action)).to.deep.equal(newState);
  });

  it('handles CURRENT_USER_FAILURE', () => {
    const oldState = {
      token: 'gGKhkhafhkhJGGJjghdsafghj',
      userId: 'AHHmvczsdfhJHJHGbjhHJkJJG'
    };
    const action = {
      type: userActions.CURRENT_USER_FAILURE,
    };
    const newState = {
      token: 'gGKhkhafhkhJGGJjghdsafghj',
      userId: null
    };
    expect(auth(oldState, action)).to.deep.equal(newState);
  });
});
